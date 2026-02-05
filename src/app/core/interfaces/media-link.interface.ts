export interface MediaLink {
    label: string;
    icon: string;
    translationKey: string; // Добавьте это обязательное свойство
    url?: string;
    command?: () => void;
}
