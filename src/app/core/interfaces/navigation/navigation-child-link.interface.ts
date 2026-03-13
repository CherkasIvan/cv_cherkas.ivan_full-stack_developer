export interface NavigationChildLink {
    id: string;
    title: string;
    translationKey: string;
    path: string;
    icon?: string;
    order: number;
    parentId: string;
}
