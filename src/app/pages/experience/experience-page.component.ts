import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cv-experience-page',
    standalone: true,
    imports: [],
    templateUrl: './experience-page.component.html',
    styleUrl: './experience-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencePageComponent {}
