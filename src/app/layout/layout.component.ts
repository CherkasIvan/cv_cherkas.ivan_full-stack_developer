import { CommonModule } from '@angular/common';
import {
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    computed,
    effect,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterOutlet } from '@angular/router';

import { Observable, debounceTime, fromEvent } from 'rxjs';

import { BREAKPOINTS } from '@core/constant/breakpoints.const';
import { TranslateModule } from '@ngx-translate/core';

import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { NavigationSideBarComponent } from './components/navigation-side-bar/navigation-side-bar.component';

// Интерфейсы
interface SeasonImage {
    url: string;
    index: number;
    loaded: boolean;
}

// Тип для сезонов
type Season = 'winter' | 'spring' | 'summer' | 'autumn';

// Тип для типа изображения при загрузке
type ImageLoadType = 'current' | 'next';

// Константы
const SEASON_IMAGES_COUNT: number = 6;
const IMAGE_ROTATION_INTERVAL: number = 30000; // 30 секунд
const TRANSITION_DURATION: number = 1000; // 1 секунда
const SIDENAV_WIDTH: number = 280;
const TOGGLE_BUTTON_OFFSET: number = 20;
const SEASON_INFO_OFFSET: number = 20;

@Component({
    selector: 'cv-layout',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        NavigationSideBarComponent,
        MobileHeaderComponent,
        TranslateModule,
        MatMenuModule,
    ],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
    // Public signals
    public readonly isSideNavOpened = signal<boolean>(true);
    public readonly isMobileMenuOpened = signal<boolean>(false);
    public readonly isTransitioning = signal<boolean>(false);

    @ViewChild(MatMenuTrigger) public trigger!: MatMenuTrigger;

    // Public properties
    public currentSeason: Season = 'winter';
    public seasonImages: string[] = [];
    public currentImage: SeasonImage = { url: '', index: 0, loaded: false };
    public nextImage: SeasonImage = { url: '', index: 0, loaded: false };

    // Private properties
    private readonly windowWidth = signal<number>(window.innerWidth);
    private imageInterval?: number;
    private preloadImages: HTMLImageElement[] = [];
    private wasMobile: boolean;

    // Computed signals
    public readonly isMobile = computed<boolean>(() => {
        return this.windowWidth() < BREAKPOINTS.MOBILE;
    });

    public readonly computedSideNavWidth = computed<number>(() => {
        return this.isSideNavOpened() ? SIDENAV_WIDTH : 0;
    });

    constructor() {
        this.wasMobile = this.isMobile();
        this.initializeResizeListener();
    }

    public ngOnInit(): void {
        this.determineSeason();
        this.loadSeasonImages();
        this.startImageRotation();
    }

    public ngOnDestroy(): void {
        this.clearImageInterval();
        this.clearPreloadedImages();
    }

    // Public methods
    public onImageLoad(event: Event, type: ImageLoadType): void {
        const img = event.target as HTMLImageElement;
        img.classList.add('loaded');

        if (type === 'next') {
            setTimeout((): void => {
                this.currentImage = { ...this.nextImage, loaded: true };
                this.isTransitioning.set(false);
            }, TRANSITION_DURATION);
        }
    }

    public nextImageManually(): void {
        this.rotateImage();
    }

    public toggleSideNav(): void {
        this.isSideNavOpened.update((value: boolean): boolean => !value);
    }

    public toggleMobileMenu(): void {
        this.isMobileMenuOpened.update((value: boolean): boolean => !value);
    }

    public onNavigation(): void {
        // Обработка навигации
    }

    public onMobileNavigation(): void {
        if (this.isMobile()) {
            this.isMobileMenuOpened.set(false);
        }
    }

    // Private methods
    private initializeResizeListener(): void {
        const resize$: Observable<Event> = fromEvent(window, 'resize').pipe(
            debounceTime(100),
        );
        const windowSize = toSignal(resize$, { initialValue: undefined });

        effect((): void => {
            windowSize();
            const currentWidth: number = window.innerWidth;
            this.windowWidth.set(currentWidth);

            const nowIsMobile: boolean = currentWidth < BREAKPOINTS.MOBILE;

            if (nowIsMobile && !this.wasMobile) {
                this.isSideNavOpened.set(false);
                this.isMobileMenuOpened.set(false);
            } else if (!nowIsMobile && this.wasMobile) {
                this.isSideNavOpened.set(true);
                this.isMobileMenuOpened.set(false);
            }

            this.wasMobile = nowIsMobile;
        });
    }

    private determineSeason(): void {
        const month: number = new Date().getMonth();

        if (month >= 2 && month <= 4) {
            this.currentSeason = 'spring';
        } else if (month >= 5 && month <= 7) {
            this.currentSeason = 'summer';
        } else if (month >= 8 && month <= 10) {
            this.currentSeason = 'autumn';
        } else {
            this.currentSeason = 'winter';
        }
    }

    private loadSeasonImages(): void {
        const basePath: string = `/images/seasons/${this.currentSeason}`;

        this.seasonImages = Array.from(
            { length: SEASON_IMAGES_COUNT },
            (_, i: number): string =>
                `${basePath}/${this.currentSeason}-${i + 1}.jpg`,
        );

        this.preloadAllImages();

        if (this.seasonImages.length > 0) {
            this.currentImage = {
                url: this.seasonImages[0],
                index: 0,
                loaded: false,
            };
        }
    }

    private preloadAllImages(): void {
        this.preloadImages = this.seasonImages.map(
            (url: string): HTMLImageElement => {
                const img = new Image();
                img.src = url;
                return img;
            },
        );
    }

    private startImageRotation(): void {
        this.imageInterval = window.setInterval((): void => {
            this.rotateImage();
        }, IMAGE_ROTATION_INTERVAL);
    }

    private rotateImage(): void {
        if (this.seasonImages.length === 0) return;

        let nextIndex: number;
        do {
            nextIndex = Math.floor(Math.random() * this.seasonImages.length);
        } while (
            nextIndex === this.currentImage.index &&
            this.seasonImages.length > 1
        );

        this.nextImage = {
            url: this.seasonImages[nextIndex],
            index: nextIndex,
            loaded: false,
        };

        this.isTransitioning.set(true);
    }

    private clearImageInterval(): void {
        if (this.imageInterval) {
            clearInterval(this.imageInterval);
        }
    }

    private clearPreloadedImages(): void {
        this.preloadImages = [];
    }
}
