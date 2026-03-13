import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'cv-footer-media-links',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
    templateUrl: './footer-media-links.component.html',
    styleUrls: ['./footer-media-links.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterMediaLinksComponent {}
