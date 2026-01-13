import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cv-education-page',
    standalone: true,
    imports: [],
    templateUrl: './education-page.html',
    styleUrl: './education-page.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationPage {}
