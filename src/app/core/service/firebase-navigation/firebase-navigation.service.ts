import { Injectable, inject, signal } from '@angular/core';
import {
    Firestore,
    collection,
    collectionData,
    orderBy,
    query,
    where,
} from '@angular/fire/firestore';

import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';

import { NavigationChildLink } from '@core/interfaces/navigation/navigation-child-link.interface';
import { NavigationLink } from '@core/interfaces/navigation/navigation-link.interface';
import { WorkExperienceItem } from '@core/interfaces/project/work-experience-item.interface';

@Injectable({ providedIn: 'root' })
export class FirebaseNavigationService {
    private readonly firestore = inject(Firestore);

    // Сигналы для хранения данных
    private readonly mainLinksSignal = signal<NavigationLink[]>([]);
    private readonly experienceCardsSignal = signal<any[]>([]);
    private readonly childrenMapSignal = signal<
        Map<string, NavigationChildLink[]>
    >(new Map());

    // Публичные сигналы только для чтения
    public readonly navigationLinks = this.mainLinksSignal.asReadonly();
    public readonly childrenMap = this.childrenMapSignal.asReadonly();

    public load(): Promise<void> {
        return new Promise((resolve) => {
            forkJoin({
                mainLinks: this.getMainLinks().pipe(take(1)),
                allChildren: this.getAllChildren().pipe(take(1)),
                allWarkExperienceCards: this.getExperienceCards().pipe(take(1)),
            })
                .pipe(
                    catchError((err) => {
                        console.error('❌ Navigation load error:', err);
                        return of({
                            mainLinks: [],
                            allChildren: [],
                            allWarkExperienceCards: [],
                        });
                    }),
                )
                .subscribe({
                    next: ({
                        mainLinks,
                        allChildren,
                        allWarkExperienceCards,
                    }) => {
                        this.mainLinksSignal.set(mainLinks);
                        this.experienceCardsSignal.set(allWarkExperienceCards);

                        // Группируем детей по parentId
                        const childrenMap = new Map<
                            string,
                            NavigationChildLink[]
                        >();
                        allChildren.forEach((child) => {
                            const parentId = child.parentId;
                            if (parentId) {
                                const existing =
                                    childrenMap.get(parentId) || [];
                                childrenMap.set(parentId, [...existing, child]);
                            }
                        });
                        this.childrenMapSignal.set(childrenMap);

                        resolve();
                    },
                    error: (err) => {
                        console.error('❌ Fatal navigation error:', err);
                        resolve(); // не блокируем приложение
                    },
                });
        });
    }

    getExperienceCards(): Observable<WorkExperienceItem[]> {
        const collectionRef = collection(this.firestore, 'workExperience');
        const q = query(collectionRef, orderBy('order', 'asc'));

        return collectionData<any>(q, {
            idField: 'id',
        }).pipe(
            map((items) =>
                items.map((item) => ({
                    ...item, // spreads all original fields (company, position, etc.)
                    dateStart: this.timestampToDate(item.dateStart),
                    dateEnd: this.timestampToDate(item.dateEnd),
                })),
            ),
        ) as Observable<WorkExperienceItem[]>; // cast is safe because we converted dates
    }

    private timestampToDate(timestamp: any): Date | null {
        if (!timestamp) return null; // если дата отсутствует (например, текущая работа)

        // Firestore Timestamp объект имеет поля seconds и nanoseconds
        if (
            timestamp &&
            typeof timestamp === 'object' &&
            'seconds' in timestamp
        ) {
            return new Date(timestamp.seconds * 1000);
        }

        // Если вдруг уже Date или строка
        if (timestamp instanceof Date) return timestamp;
        if (typeof timestamp === 'string') return new Date(timestamp);

        console.warn('Не удалось преобразовать timestamp:', timestamp);
        return null;
    }

    /**
     * Возвращает Observable с корневыми ссылками (parentId == null).
     */
    public getMainLinks(): Observable<NavigationLink[]> {
        const collectionRef = collection(this.firestore, 'navigationLinks');
        const q = query(
            collectionRef,
            where('parentId', '==', null),
            orderBy('order', 'asc'),
        );

        return collectionData(q, { idField: 'id' }).pipe(
            tap((data) => console.log('🔥 Main links raw:', data)),
            map((data) =>
                data.map((item) => ({
                    id: item['id'],
                    title: item['title'] ?? '',
                    translationKey: item['translationKey'] ?? '',
                    path: this.cleanPath(item['path'] ?? ''),
                    icon: item['icon'] ?? '',
                    order: item['order'] ?? 0,
                    hasChildren: item['hasChildren'] ?? false,
                    parentId: item['parentId'] ?? null,
                })),
            ),
        );
    }

    /**
     * Возвращает Observable со всеми документами из коллекции navigationChildren,
     * отсортированными по полю order (по возрастанию).
     */
    public getAllChildren(): Observable<NavigationChildLink[]> {
        const collectionRef = collection(this.firestore, 'navigationChildren');
        const q = query(collectionRef, orderBy('order', 'asc'));

        return collectionData(q, { idField: 'id' }).pipe(
            tap((data) => console.log('📦 All children raw:', data)),
            map((data) =>
                data.map((item) => ({
                    id: item['id'],
                    title: item['title'] ?? '',
                    translationKey: item['translationKey'] ?? '',
                    path: this.cleanPath(item['path'] ?? ''),
                    icon: item['icon'] ?? '',
                    order: item['order'] ?? 0,
                    parentId: item['parentId'] ?? '',
                })),
            ),
        );
    }

    /**
     * Возвращает дочерние ссылки для родителя из уже загруженного Map.
     */
    public getChildrenForParent(parentId: string): NavigationChildLink[] {
        return this.childrenMapSignal().get(parentId) ?? [];
    }

    private cleanPath(path: string): string {
        return path.replace(/^\/+|\/+$/g, '');
    }
}
