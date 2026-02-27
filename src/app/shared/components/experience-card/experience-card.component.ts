import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { ExperienceItem } from '@core/interfaces/experience-item.interface';

@Component({
    selector: 'cv-experience-card',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatChipsModule,
        MatButtonModule,
        MatExpansionModule,
    ],
    templateUrl: './experience-card.component.html',
    styleUrl: './experience-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCardComponent {
    @Input({ required: true }) experience!: ExperienceItem;

    isExpanded = false;

    toggleReadMore(): void {
        this.isExpanded = !this.isExpanded;
    }
}
