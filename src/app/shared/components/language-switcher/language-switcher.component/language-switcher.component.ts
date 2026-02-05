import { AutoCompleteModule } from 'primeng/autocomplete';

import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TRANSLATION_CONFIG } from '@core/constant/language.const';
import { Language } from '@core/interfaces/language.interface';
import { TranslationService } from '@core/service/translation/translation.service';

@Component({
    selector: 'cv-language-switcher',
    standalone: true,
    imports: [CommonModule, FormsModule, AutoCompleteModule],
    templateUrl: './language-switcher.component.html',
    styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent implements OnInit {
    private translationService = inject(TranslationService);

    selectedLang: Language | null = null;

    filteredLangs = signal<Language[]>([]);

    allLangs = computed(() => this.translationService.availableLangs());

    ngOnInit(): void {
        const currentLangCode = this.translationService.currentLang();
        this.selectedLang =
            this.allLangs().find((lang) => lang.code === currentLangCode) ||
            null;

        this.filteredLangs.set([...this.allLangs()]);
    }

    filterLangs(event: any): void {
        const query = event.query?.toLowerCase() || '';

        if (!query) {
            this.filteredLangs.set([...this.allLangs()]);
            return;
        }

        const filtered = this.allLangs().filter(
            (lang) =>
                lang.name.toLowerCase().includes(query) ||
                lang.code.toLowerCase().includes(query),
        );

        this.filteredLangs.set(filtered);
    }

    // Обработка выбора языка - обновляет и selectedLang и сервис
    onLanguageSelect(event: any): void {
        if (event.value) {
            this.selectedLang = event.value;
            this.translationService.setLanguage(event.value.code);
        }
    }

    onClear(): void {
        this.selectedLang = null;
        this.translationService.setLanguage(TRANSLATION_CONFIG.defaultLang);
    }
}
