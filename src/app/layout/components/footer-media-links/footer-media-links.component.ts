import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';


@Component({
    selector: 'cv-footer-media-links',
    standalone: true,
    imports: [CommonModule,],
    providers: [],
    templateUrl: './footer-media-links.component.html',
    styleUrl: './footer-media-links.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterMediaLinksComponent  {

}
