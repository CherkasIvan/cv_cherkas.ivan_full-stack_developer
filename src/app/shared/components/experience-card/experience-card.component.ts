import { CommonModule } from '@angular/common';
import {
    Component,
    Input,
    computed,
    inject,
    input,
    signal,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { WorkExperienceItem } from '@core/interfaces/project/work-experience-item.interface';
import { TranslateModule } from '@ngx-translate/core';

import { ExperienceDialogComponent } from '../dialogs/experience-dialog/experience-dialog.component';

@Component({
    selector: 'cv-experience-card',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatChipsModule,
        MatExpansionModule,
        TranslateModule,
    ],
    templateUrl: './experience-card.component.html',
    styleUrl: './experience-card.component.scss',
})
export class ExperienceCardComponent {
    experience = input.required<WorkExperienceItem>();

    techPanelExpanded = signal(false);
    achievementsPanelExpanded = signal(false);

    private dialog = inject(MatDialog);

    // Вычисляемое значение для отображения периода
    period = computed(() => {
        const start = this.formatDate(this.experience().dateStart);
        const end = this.experience().dateEnd
            ? this.formatDate(this.experience().dateEnd)
            : 'настоящее время';
        return `${start} — ${end}`;
    });

    // Вычисляемое значение для отображения должности
    positionDisplay = computed(() => {
        const exp = this.experience();
        if (exp.positionStart === exp.positionEnd) {
            return exp.positionStart;
        }
        return `${exp.positionStart} — ${exp.positionEnd}`;
    });

    private formatDate(date: Date): string {
        if (!date) return '';
        return new Intl.DateTimeFormat('ru', {
            month: 'short',
            year: 'numeric',
        }).format(date);
    }

    toggleTechPanel(): void {
        this.techPanelExpanded.update((value) => !value);
    }

    toggleAchievementsPanel(): void {
        this.achievementsPanelExpanded.update((value) => !value);
    }

    openWorkExperienceDialog(): void {
        this.dialog.open(ExperienceDialogComponent, {
            data: this.experience(),
            maxWidth: '800px',
        });
    }
}
