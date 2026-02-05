import { MenuItem } from 'primeng/api';

import { ExperienceTab } from '@core/enum/experience-tab.enums';
import { ProjectTab } from '@core/enum/project-tab.enums';
import { AppRoutes } from '@core/enum/routes.enum';
import { TechnologyTab } from '@core/enum/technology-tab.enums';

export interface NavigationItem extends Omit<MenuItem, 'items' | 'routerLink'> {
    label?: string;
    icon: string;
    routerLink?: string;
    queryParams?: Record<string, string>;
    children?: NavigationItem[];
    badge?: string;
    shortcut?: string;
}

export interface NavigationGroup {
    title: string;
    items: NavigationItem[];
}

// Типизированные маршруты
export interface RouteConfig {
    path: AppRoutes;
    tab?: ProjectTab | TechnologyTab | ExperienceTab;
}
