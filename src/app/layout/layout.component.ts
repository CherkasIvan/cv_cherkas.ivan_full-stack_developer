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

    readonly isMobileView = signal<boolean>(false);

    readonly showHeader = computed(() => this.isMobileView());
    readonly showSidebar = computed(() => !this.isMobileView());
    mobileMenuVisible: any;

    ngOnInit(): void {
        this.checkViewport();

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.handleResize.bind(this));
        }
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

    ngOnDestroy(): void {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.handleResize.bind(this));
        }
    }
}
