
import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'cv-language-switcher',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './language-switcher.component.html',
    styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent {

}
