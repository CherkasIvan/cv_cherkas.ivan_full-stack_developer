import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';

@Component({
    selector: 'cv-projects-page',
    standalone: true,
    imports: [ButtonModule, TabsModule, FormsModule],
    templateUrl: './projects-page.component.html',
    styleUrl: './projects-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent {
    public value: number = 0;
}
