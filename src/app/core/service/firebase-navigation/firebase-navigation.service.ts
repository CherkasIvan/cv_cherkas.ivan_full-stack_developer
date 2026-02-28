import { Injectable, computed, inject, signal } from '@angular/core';
import {
    Firestore,
    collection,
    collectionData,
    orderBy,
    query,
    where,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { NavigationChildLink } from '@core/interfaces/navigation/navigation-child-link.interface';
import { NavigationLink } from '@core/interfaces/navigation/navigation-link.interface';

@Injectable({
    providedIn: 'root',
})
export class FirebaseNavigationService {
    private firestore = inject(Firestore);

    // Сигналы для хранения данных
    private mainLinksSignal = signal<NavigationLink[]>([]);
    private childLinksSignal = signal<NavigationChildLink[]>([]);

    // Публичные сигналы только для чтения
    readonly mainLinks = this.mainLinksSignal.asReadonly();
    readonly childLinks = this.childLinksSignal.asReadonly();

    // Компьютед сигнал для объединенных данных с детьми
    readonly navigationLinks = computed(() => {
        const mainLinks = this.mainLinksSignal();
        const childLinks = this.childLinksSignal();

        return mainLinks.map((link) => ({
            ...link,
            children: childLinks.filter((child) => child.parentId === link.id),
        }));
    });

    constructor() {
        this.loadNavigationData();
    }

    private loadNavigationData(): void {
        // Загружаем основные ссылки
        this.getMainLinks().subscribe((links) => {
            this.mainLinksSignal.set(links);
        });

        // Загружаем дочерние ссылки
        this.getChildLinks().subscribe((links) => {
            this.childLinksSignal.set(links);
        });
    }

    // Получение основных ссылок из Firestore
    private getMainLinks(): Observable<NavigationLink[]> {
        const linksCollection = collection(this.firestore, 'navigationLinks');
        const linksQuery = query(
            linksCollection,
            where('parentId', '==', null), // Только основные ссылки
            orderBy('order', 'asc'),
        );

        return collectionData(linksQuery, { idField: 'id' }) as Observable<
            NavigationLink[]
        >;
    }

    // Получение дочерних ссылок
    private getChildLinks(): Observable<NavigationChildLink[]> {
        const childrenCollection = collection(
            this.firestore,
            'navigationChildren',
        );
        const childrenQuery = query(
            childrenCollection,
            orderBy('order', 'asc'),
        );

        return collectionData(childrenQuery, { idField: 'id' }) as Observable<
            NavigationChildLink[]
        >;
    }

    // Получение ссылок для конкретного родителя
    getChildrenByParentId(parentId: string): NavigationChildLink[] {
        return this.childLinksSignal().filter(
            (child) => child.parentId === parentId,
        );
    }

    // Обновление данных в реальном времени (опционально)
    subscribeToRealTimeUpdates(): void {
        // Можно добавить real-time обновления если нужно
    }
}
