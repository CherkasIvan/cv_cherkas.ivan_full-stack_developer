import { AppRoutes } from '@core/enum/routes.enum';

import { NavigationChildLink } from './navigation-child-link.interface';

export interface NavigationLink {
    id?: string;
    title: string;
    translationKey: string;
    path: string;
    icon: string;
    order: number;
    hasChildren?: boolean;
    children?: NavigationChildLink[];
    isActive?: boolean;
    parentId?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}
