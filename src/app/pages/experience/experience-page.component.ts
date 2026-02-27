import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { ExperienceCardComponent } from '@shared/components/experience-card/experience-card.component';

import { ExperienceItem } from '@core/interfaces/experience-item.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'cv-experience-page',
    standalone: true,
    imports: [
        CommonModule,
        MatGridListModule,
        MatCardModule,
        MatIconModule,
        MatChipsModule,
        ExperienceCardComponent,
        TranslateModule,
    ],
    templateUrl: './experience-page.component.html',
    styleUrl: './experience-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencePageComponent {
    experienceItems: ExperienceItem[] = [
        {
            id: 1,
            company: 'Tech Company Inc.',
            position: 'Senior Frontend Developer',
            period: '2022 - Present',
            description: 'Разработка и оптимизация корпоративных приложений',
            technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'SCSS'],
            achievements: [
                'Увеличил производительность приложения на 40%',
                'Внедрил лучшие практики code review',
                'Руководил командой из 5 разработчиков',
            ],
        },
        {
            id: 2,
            company: 'Digital Solutions Ltd',
            position: 'Frontend Developer',
            period: '2020 - 2022',
            description: 'Разработка клиентских приложений для e-commerce',
            technologies: [
                'React',
                'Redux',
                'JavaScript',
                'Material-UI',
                'Jest',
            ],
            achievements: [
                'Разработал 3 крупных интернет-магазина',
                'Создал библиотеку переиспользуемых компонентов',
                'Участвовал в Agile-процессах',
            ],
        },
        {
            id: 3,
            company: 'Startup Hub',
            position: 'Junior Web Developer',
            period: '2019 - 2020',
            description: 'Разработка и поддержка веб-приложений',
            technologies: ['HTML/CSS', 'JavaScript', 'Vue.js', 'Bootstrap'],
            achievements: [
                'Создал 5 лендингов для клиентов',
                'Внедрил адаптивную верстку',
                'Оптимизировал загрузку страниц на 30%',
            ],
        },
    ];

    // Для адаптивного grid-list
    get gridCols(): number {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    get rowHeight(): string {
        return window.innerWidth <= 768 ? '500px' : '480px';
    }
}
