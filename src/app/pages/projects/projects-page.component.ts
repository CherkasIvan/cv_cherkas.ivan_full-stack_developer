import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'cv-projects-page',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './projects-page.component.html',
    styleUrl: './projects-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent {
    public value: number = 0;
}
