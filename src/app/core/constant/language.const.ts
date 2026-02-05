import { LanguageCode } from '@core/enum/language.enum';
import { TranslationConfig } from '@core/interfaces/translation-config.interface';

import { Language } from '../interfaces/language.interface';

export const AVAILABLE_LANGUAGES: Language[] = [
    {
        code: 'en',
        name: 'English',
        flag: '🇺🇸',
    },
    {
        code: 'ru',
        name: 'Русский',
        flag: '🇷🇺',
    },
];

export const TRANSLATION_CONFIG: TranslationConfig = {
    defaultLang: LanguageCode.EN,
    availableLangs: AVAILABLE_LANGUAGES,
    storageKey: 'cv_language',
} as const;
