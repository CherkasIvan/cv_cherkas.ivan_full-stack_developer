import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { LanguageSwitcherComponent } from '@shared/components/language-switcher/language-switcher.component/language-switcher.component';

import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

import { HEADER_NAVIGATION_ITEMS } from '@core/constant/navigation.const';
import { NavigationItem } from '@core/interfaces/navigation-item.interface';
import { ThemeService } from '@core/service/theme/theme.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'cv-mobile-header',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterLink,
        TranslateModule,
        MenubarModule,
        BadgeModule,
        AvatarModule,
        InputTextModule,
        RippleModule,
        ToggleSwitchModule,
        LanguageSwitcherComponent,
    ],
    templateUrl: './mobile-header.component.html',
    styleUrl: './mobile-header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileHeaderComponent {
    private readonly router = inject(Router);
    readonly themeService = inject(ThemeService);

    readonly navigationItems = signal<NavigationItem[]>(
        HEADER_NAVIGATION_ITEMS,
    );
    readonly menuItems = computed(() =>
        this.convertToMenuItems(this.navigationItems()),
    );

    private convertToMenuItems(navItems: NavigationItem[]): MenuItem[] {
        return navItems.map((item) => ({
            label: item.label,
            icon: item.icon,
            routerLink: item.routerLink,
            queryParams: item.queryParams,
            items: item.children
                ? this.convertToMenuItems(item.children)
                : undefined,
            badge: item.badge,
            shortcut: item.shortcut,
            command: () => {
                if (item.routerLink) {
                    this.router.navigate([item.routerLink], {
                        queryParams: item.queryParams,
                    });
                }
            },
        }));
    }

    handleNavigation(item: MenuItem): void {
        if (item.routerLink) {
            this.router.navigate([item.routerLink], {
                queryParams: item.queryParams,
            });
        }
    }
}
