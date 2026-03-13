import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    input,
    output,
} from '@angular/core';

import { NextImageButtonComponent } from '@shared/components/next-image-button/next-image-button.component';
import { SeasonInfoComponent } from '@shared/components/season-info/season-info.component';
import { SeasonType } from '@shared/types/type';

import { FooterMediaLinksComponent } from '../footer-media-links/footer-media-links.component';

@Component({
    selector: 'cv-layout-footer',
    standalone: true,
    imports: [
        CommonModule,
        NextImageButtonComponent,
        SeasonInfoComponent,
        FooterMediaLinksComponent,
    ],
    templateUrl: './layout-footer.component.html',
    styleUrls: ['./layout-footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFooterComponent {
    season = input.required<SeasonType>();
    next = output<void>();
}
