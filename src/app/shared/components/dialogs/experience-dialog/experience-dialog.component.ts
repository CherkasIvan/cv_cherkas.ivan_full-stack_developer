import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { WorkExperienceItem } from '@core/interfaces/project/work-experience-item.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'cv-experience-dialog',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        MatChipsModule,
        MatIconModule,
        TranslateModule,
    ],
    templateUrl: './experience-dialog.component.html',
    styleUrl: './experience-dialog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: WorkExperienceItem) {}

    // Метод для форматирования периода (можно вынести в общий сервис/пайп)
    formatPeriod(item: WorkExperienceItem): string {
        const start = this.formatDate(item.dateStart);
        const end = item.dateEnd
            ? this.formatDate(item.dateEnd)
            : 'настоящее время';
        return `${start} — ${end}`;
    }

    private formatDate(date: Date): string {
        if (!date) return '';
        return new Intl.DateTimeFormat('ru', {
            month: 'short',
            year: 'numeric',
        }).format(date);
    }
}
