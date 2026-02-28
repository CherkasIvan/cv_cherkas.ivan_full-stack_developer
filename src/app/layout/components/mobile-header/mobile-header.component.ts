import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
    input,
    output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

import { LanguageSwitcherComponent } from '@shared/components/language-switcher/language-switcher.component/language-switcher.component';

import { FirebaseNavigationService } from '@core/service/firebase-navigation/firebase-navigation.service';
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
export class MobileHeaderComponent implements OnInit {
    private navigationService = inject(FirebaseNavigationService);

    // Входные свойства
    isMenuOpened = input<boolean>(false);

    // Выходные события
    navigate = output<void>();
    toggleMenu = output<void>();

    // Используем данные из Firebase
    readonly navRoutes = this.navigationService.navigationLinks;

    ngOnInit() {
        // Логируем полученные данные
        console.log('📱 MobileHeaderComponent initialized');
        console.log('📱 Navigation links from Firebase:', this.navRoutes());
    }

    onNavigate(): void {
        this.navigate.emit();
    }

    onToggleMenu(): void {
        this.toggleMenu.emit();
    }
}
