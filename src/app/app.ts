import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Layout } from './layout/layout';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Layout],
    standalone: true,
    templateUrl: './app.html',
    styleUrl: './app.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    protected readonly title = signal('cv_cherkas.ivan_full-stack_developer');
}
