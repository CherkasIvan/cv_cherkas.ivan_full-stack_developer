import { Component, computed, effect, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterOutlet } from '@angular/router';

import { debounceTime, fromEvent } from 'rxjs';

import { VIEWPORT_BREAKPOINTS } from '@core/constant/viewport.const';

import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { NavigationSideBarComponent } from './components/navigation-side-bar/navigation-side-bar.component';

@Component({
    selector: 'cv-layout',
    standalone: true,
    imports: [
        RouterOutlet,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        NavigationSideBarComponent,
        MobileHeaderComponent,
    ],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
    readonly isSideNavOpened = signal(true);
    readonly isMobileMenuOpened = signal(false);

    private readonly windowWidth = signal(window.innerWidth);

    readonly isMobile = computed(() => {
        return this.windowWidth() < VIEWPORT_BREAKPOINTS.MOBILE;
    });

    readonly computedSideNavWidth = computed(() => {
        return this.isSideNavOpened() ? 280 : 0;
    });

    private wasMobile = this.isMobile();

    constructor() {
        const resize$ = fromEvent(window, 'resize').pipe(debounceTime(100));

        const windowSize = toSignal(resize$, { initialValue: undefined });

        effect(() => {
            windowSize(); // Реакция на изменения
            const currentWidth = window.innerWidth;
            this.windowWidth.set(currentWidth);

            const nowIsMobile = currentWidth < VIEWPORT_BREAKPOINTS.MOBILE;

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

    toggleSideNav(): void {
        this.isSideNavOpened.update((value) => !value);
    }

    toggleMobileMenu(): void {
        this.isMobileMenuOpened.update((value) => !value);
    }

    onNavigation(): void {}

    onMobileNavigation(): void {
        if (this.isMobile()) {
            this.isMobileMenuOpened.set(false);
        }
    }
}
