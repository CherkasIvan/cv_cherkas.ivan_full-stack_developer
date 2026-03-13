import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'cv-next-image-button',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
    templateUrl: './next-image-button.component.html',
    styleUrls: [
        './next-image-button.component.scss',
        './media/next-image-button-media.component.scss',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextImageButtonComponent {
    next = output<void>();
}
