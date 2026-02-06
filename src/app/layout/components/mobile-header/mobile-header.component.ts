import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

import { LanguageSwitcherComponent } from '@shared/components/language-switcher/language-switcher.component/language-switcher.component';

import { NAV_ROUTES } from '@core/constant/nav-routes.const';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'cv-mobile-header',
    standalone: true,
    imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        RouterModule,
        TranslateModule,
        MatTooltipModule,
        LanguageSwitcherComponent,
    ],
    templateUrl: './mobile-header.component.html',
    styleUrls: ['./mobile-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileHeaderComponent {
    navigate = output<void>();

    readonly navRoutes = NAV_ROUTES;

    onNavigate(): void {
        this.navigate.emit();
    }
}
