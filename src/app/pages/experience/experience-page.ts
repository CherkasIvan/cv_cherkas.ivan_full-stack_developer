import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cv-experience-page',
    standalone: true,
    imports: [],
    templateUrl: './experience-page.html',
    styleUrl: './experience-page.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencePage {}
