import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cv-technologies-page',
    standalone: true,
    imports: [],
    templateUrl: './technologies-page.component.html',
    styleUrl: './technologies-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologiesPageComponent {}
