import { LanguageCode } from '@core/enum/language.enum';
import { TranslationConfig } from '@core/interfaces/translation-config.interface';

import { Language } from '../interfaces/language.interface';

export const AVAILABLE_LANGUAGES: Language[] = [
    { code: LanguageCode.EN, name: 'English', flag: 'us' },
    { code: LanguageCode.RU, name: 'Русский', flag: 'ru' },
] as const;

export const TRANSLATION_CONFIG: TranslationConfig = {
    defaultLang: LanguageCode.EN,
    availableLangs: AVAILABLE_LANGUAGES,
} as const;
