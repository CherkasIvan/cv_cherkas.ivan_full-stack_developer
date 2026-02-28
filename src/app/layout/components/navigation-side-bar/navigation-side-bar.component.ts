import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';

import { LanguageSwitcherComponent } from '@shared/components/language-switcher/language-switcher.component/language-switcher.component';

import { FirebaseNavigationService } from '@core/service/firebase-navigation/firebase-navigation.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'cv-navigation-side-bar',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatListModule,
        MatIconModule,
        MatExpansionModule,
        TranslateModule,
        LanguageSwitcherComponent,
    ],
    templateUrl: './navigation-side-bar.component.html',
    styleUrls: ['./navigation-side-bar.component.scss'],
})
export class NavigationSideBarComponent implements OnInit {
    navigate = output<void>();

    private navigationService = inject(FirebaseNavigationService);
    private router = inject(Router);
    private translate = inject(TranslateService);

    // Сигналы из сервиса
    readonly navigationLinks = this.navigationService.navigationLinks;

    // Состояние для открытых панелей
    expandedPanels = new Set<string>();

    ngOnInit() {
        // Подписываемся на изменения языка если нужно
        this.translate.onLangChange.subscribe(() => {
            // Обновляем что-то если нужно
        });
    }

    onNavigate(): void {
        this.navigate.emit();
    }

    togglePanel(linkId: string): void {
        if (this.expandedPanels.has(linkId)) {
            this.expandedPanels.delete(linkId);
        } else {
            this.expandedPanels.add(linkId);
        }
    }

    isPanelExpanded(linkId: string): boolean {
        return this.expandedPanels.has(linkId);
    }

    navigateToRoute(path: string): void {
        this.router.navigate([path]);
        this.onNavigate();
    }
}
