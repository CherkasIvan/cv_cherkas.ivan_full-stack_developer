import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { LanguageSwitcherComponent } from '@shared/components/language-switcher/language-switcher.component/language-switcher.component';

import { NAV_ROUTES } from '@core/constant/nav-routes.const';
import { NavRoute } from '@core/interfaces/nav-route.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'cv-navigation-side-bar',
    standalone: true,
    imports: [
        RouterModule,
        MatListModule,
        MatIconModule,
        TranslateModule,
        LanguageSwitcherComponent,
    ],
    templateUrl: './navigation-side-bar.component.html',
    styleUrls: ['./navigation-side-bar.component.scss'],
})
export class NavigationSideBarComponent {
    navigate = output<void>();

    readonly navRoutes: NavRoute[] = NAV_ROUTES;

    onNavigate(): void {
        this.navigate.emit();
    }
}
