import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'cv-language-switcher',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        TranslateModule,
    ],
    templateUrl: './language-switcher.component.html',
    styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent implements OnInit {
    private readonly translate = inject(TranslateService);

    readonly currentLanguage = signal<string>('en');

    ngOnInit(): void {
        const browserLang = this.translate.getBrowserLang();
        const savedLang = localStorage.getItem('cv_language');

        const langToUse =
            savedLang ||
            (browserLang && browserLang.match(/en|ru/) ? browserLang : 'en');

        this.currentLanguage.set(langToUse);
        this.translate.use(langToUse);
    }

    toggleLanguage(): void {
        const newLang = this.currentLanguage() === 'en' ? 'ru' : 'en';
        this.currentLanguage.set(newLang);
        this.translate.use(newLang);
        localStorage.setItem('cv_language', newLang);
    }
}
