import { Language } from './language.interface';

export interface TranslationConfig {
    defaultLang: string;
    availableLangs: Language[];
}
