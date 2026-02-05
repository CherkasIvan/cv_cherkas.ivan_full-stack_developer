import { CommonModule } from '@angular/common';
import {
    Component,
    DestroyRef,
    OnInit,
    computed,
    inject,
    input,
    output,
    signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

import { DRAWER_NAVIGATION_ITEMS } from '@core/constant/navigation.const';
import { NavigationItem } from '@core/interfaces/navigation-item.interface';
import { ThemeService } from '@core/service/theme/theme.service';

@Component({
    selector: 'cv-navigation-side-bar',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        DrawerModule,
        ButtonModule,
        ToggleSwitchModule,
    ],
    templateUrl: './navigation-side-bar.component.html',
    styleUrls: ['./navigation-side-bar.component.scss'],
})
export class NavigationSideBarComponent implements OnInit {
    private readonly router = inject(Router);
    private readonly destroyRef = inject(DestroyRef);
    readonly themeService = inject(ThemeService);

    drawerVisible = input<boolean>(false);

    drawerVisibleChange = output<boolean>();

    readonly navigationItems = signal<NavigationItem[]>(
        DRAWER_NAVIGATION_ITEMS,
    );

    readonly isDesktopMode = computed(() => !this.drawerVisible());

    ngOnInit(): void {
        this.router.events
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                this.closeDrawer();
            });

        document.addEventListener('keydown', this.handleEscapeKey.bind(this));

        this.destroyRef.onDestroy(() => {
            document.removeEventListener(
                'keydown',
                this.handleEscapeKey.bind(this),
            );
        });
    }

    closeDrawer(): void {
        this.drawerVisibleChange.emit(false);
    }

    navigate(item: NavigationItem): void {
        this.closeDrawer();

        if (item.routerLink) {
            this.router.navigate([item.routerLink], {
                queryParams: item.queryParams,
            });
        }
    }

    private handleEscapeKey(event: KeyboardEvent): void {
        if (event.key === 'Escape' && this.drawerVisible()) {
            this.closeDrawer();
        }
    }
}
