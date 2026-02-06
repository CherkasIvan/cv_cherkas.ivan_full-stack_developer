import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'cv-mobile-header',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslateModule],
    templateUrl: './mobile-header.component.html',
    styleUrl: './mobile-header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileHeaderComponent {}
