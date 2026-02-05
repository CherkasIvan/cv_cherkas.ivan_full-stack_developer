import {
    DestroyRef,
    Injectable,
    computed,
    inject,
    signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { MenuItem } from 'primeng/api';

import {
    AVAILABLE_LANGUAGES,
    TRANSLATION_CONFIG,
} from '@core/constant/language.const';
import { Language } from '@core/interfaces/language.interface';
import { MediaLink } from '@core/interfaces/media-link.interface';
import { NavigationItem } from '@core/interfaces/navigation-item.interface';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {
    private readonly translate = inject(TranslateService);
    private readonly destroyRef = inject(DestroyRef);

    readonly currentLang = signal<string>(TRANSLATION_CONFIG.defaultLang);
    readonly availableLangs = signal<Language[]>(AVAILABLE_LANGUAGES);

    constructor() {
        this.initializeTranslation();
        this.setupLangChangeListener();
    }

    private initializeTranslation(): void {
        this.translate.setDefaultLang(TRANSLATION_CONFIG.defaultLang);
        const savedLang =
            localStorage.getItem('language') || TRANSLATION_CONFIG.defaultLang;
        this.setLanguage(savedLang);
    }

    private setupLangChangeListener(): void {
        this.translate.onLangChange
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((event) => {
                this.currentLang.set(event.lang);
            });
    }

    setLanguage(langCode: string): void {
        this.translate.use(langCode);
        localStorage.setItem('language', langCode);
    }

    translateKey(key: string): string {
        return this.translate.instant(key);
    }

    translateNavigationItem(item: NavigationItem): MenuItem {
        return {
            ...item,
            label: this.translateKey(item['translationKey']),
            items: item.children?.map((child: any) =>
                this.translateNavigationItem(child),
            ),
            routerLink: item.routerLink ? `/${item.routerLink}` : undefined,
        };
    }

    translateNavigationItems(items: NavigationItem[]): MenuItem[] {
        return items.map((item) => this.translateNavigationItem(item));
    }

    translateMediaLink(link: MediaLink): MenuItem {
        return {
            ...link,
            label: this.translateKey(link['translationKey']),
            icon: link.icon,
        };
    }

    translateMediaLinks(links: MediaLink[]): MenuItem[] {
        return links.map((link) => this.translateMediaLink(link));
    }
}
