import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SeasonType } from '@shared/types/type';

import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'cv-season-info',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatTooltipModule, TranslateModule],
    templateUrl: './season-info.component.html',
    styleUrls: [
        './season-info.component.scss',
        './media/season-info-media.component.scss',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeasonInfoComponent {
    season = input.required<SeasonType>();
}
