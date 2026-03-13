export interface MediaLink {
    label: string;
    icon: string;
    translationKey: string;
    url?: string;
    command?: () => void;
}
