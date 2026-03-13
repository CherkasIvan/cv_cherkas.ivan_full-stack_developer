export interface NavigationLink {
    id: string;
    title: string;
    translationKey: string;
    path: string;
    icon?: string;
    order: number;
    hasChildren: boolean;
    parentId: string | null;
}
