import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
    signal,
} from '@angular/core';

import { ExperienceCardComponent } from '@shared/components/experience-card/experience-card.component';

import { WorkExperienceItem } from '@core/interfaces/project/work-experience-item.interface';
import { FirebaseNavigationService } from '@core/service/firebase-navigation/firebase-navigation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'cv-experience-page',
    standalone: true,
    imports: [CommonModule, ExperienceCardComponent, TranslateModule],
    templateUrl: './experience-page.component.html',
    styleUrl: './experience-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencePageComponent implements OnInit {
    private firebaseNavService = inject(FirebaseNavigationService);
    protected experienceItems = signal<WorkExperienceItem[]>([]);

    ngOnInit(): void {
        this.firebaseNavService.getExperienceCards().subscribe({
            next: (items) => {
                this.experienceItems.set(items as WorkExperienceItem[]);
            },
            error: (err) => console.error('Ошибка загрузки опыта:', err),
        });
    }
}
