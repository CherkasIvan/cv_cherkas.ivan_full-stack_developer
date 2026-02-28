export interface NavigationChildLink {
    id?: string;
    title: string;
    translationKey: string;
    path: string;
    parentId: string;
    order: number;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
