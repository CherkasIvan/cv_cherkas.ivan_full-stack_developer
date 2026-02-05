import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cv-education-page',
    standalone: true,
    imports: [],
    templateUrl: './education-page.component.html',
    styleUrl: './education-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationPageComponent {}
