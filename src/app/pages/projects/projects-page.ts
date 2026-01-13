import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cv-projects-page',
    standalone: true,
    imports: [],
    templateUrl: './projects-page.html',
    styleUrl: './projects-page.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPage {}
