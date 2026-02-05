import { CommonModule } from '@angular/common';
import {
    Component,
    DestroyRef,
    HostListener,
    OnInit,
    computed,
    inject,
    signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { FieldsetModule } from 'primeng/fieldset';

import { VIEWPORT_BREAKPOINTS } from '@core/constant/viewport.const';
import { ThemeService } from '@core/service/theme/theme.service';
import { LAYOUT_FIELDSET_STYLES } from '@core/theme/components/fieldset.tokens';

import { FooterMediaLinksComponent } from './components/footer-media-links/footer-media-links.component';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { NavigationSideBarComponent } from './components/navigation-side-bar/navigation-side-bar.component';

@Component({
    selector: 'cv-layout',
    standalone: true,
    imports: [
        CommonModule,
        FieldsetModule,
        FooterMediaLinksComponent,
        NavigationSideBarComponent,
        MobileHeaderComponent,
    ],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
    private readonly destroyRef = inject(DestroyRef);
    private readonly viewportBreakpoints = VIEWPORT_BREAKPOINTS;
    readonly themeService = inject(ThemeService);

    readonly isMobileView = signal<boolean>(false);
    readonly mobileMenuVisible = signal<boolean>(false); // Исправленный тип

    readonly showHeader = computed(() => this.isMobileView());
    readonly showSidebar = computed(() => !this.isMobileView());

    // Токены для Fieldset с учетом темы
    readonly fieldsetTokens = computed(() => {
        const isDark = this.themeService.isDarkMode();
        return isDark
            ? LAYOUT_FIELDSET_STYLES.darkModeOverrides
            : LAYOUT_FIELDSET_STYLES;
    });

    ngOnInit(): void {
        this.checkViewport();
        this.setupResizeListener();
    }

    @HostListener('window:resize')
    handleResize(): void {
        this.checkViewport();
    }

    private checkViewport(): void {
        if (typeof window === 'undefined') return;
        this.isMobileView.set(
            window.innerWidth <= this.viewportBreakpoints.MOBILE,
        );
    }

    private setupResizeListener(): void {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.handleResize.bind(this));
            this.destroyRef.onDestroy(() => {
                window.removeEventListener(
                    'resize',
                    this.handleResize.bind(this),
                );
            });
        }
    }
}
