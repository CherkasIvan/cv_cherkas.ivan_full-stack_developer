import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { LanguageSwitcherComponent } from '@shared/components/language-switcher/language-switcher.component/language-switcher.component';

import { TranslateModule } from '@ngx-translate/core';

export interface NavRoute {
    path: string;
    title: string;
    icon?: string;
}

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

    navRoutes: NavRoute[] = [
        { path: '/home', title: 'Главная', icon: 'home' },
        { path: '/projects', title: 'Проекты', icon: 'folder' },
        { path: '/technologies', title: 'Технологии', icon: 'code' },
        { path: '/experience', title: 'Опыт работы', icon: 'work' },
        { path: '/download-cv', title: 'Скачать CV', icon: 'download' },
    ];

    onNavigate(): void {
        this.navigate.emit();
    }
}
