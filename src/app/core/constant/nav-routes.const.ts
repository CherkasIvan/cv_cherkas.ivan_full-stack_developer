import { APP_ROUTES_ICONS } from '@core/constant/routes-icons.const';
import { APP_ROUTES_TRANSLATION_KEYS } from '@core/constant/routes-titles.const';
import { APP_ROUTES_PATHS } from '@core/constant/routes.path.const';
import { AppRoutes } from '@core/enum/routes.enum';
import { NavigationChildLink } from '@core/interfaces/navigation/navigation-child-link.interface';
import { NavigationLink } from '@core/interfaces/navigation/navigation-link.interface';

export const NAV_ROUTES: NavigationLink[] = [
    {
        title: AppRoutes.HOME,
        path: APP_ROUTES_PATHS[AppRoutes.HOME],
        translationKey: APP_ROUTES_TRANSLATION_KEYS[AppRoutes.HOME],
        icon: APP_ROUTES_ICONS[AppRoutes.HOME],
        order: 1,
        hasChildren: false,
        children: [],
        isActive: true,
        parentId: null,
    },
    {
        title: AppRoutes.PROJECTS,
        path: APP_ROUTES_PATHS[AppRoutes.PROJECTS],
        translationKey: APP_ROUTES_TRANSLATION_KEYS[AppRoutes.PROJECTS],
        icon: APP_ROUTES_ICONS[AppRoutes.PROJECTS],
        order: 2,
        hasChildren: true,
        children: [],
        isActive: true,
        parentId: null,
    },
    {
        title: AppRoutes.TECHNOLOGIES,
        path: APP_ROUTES_PATHS[AppRoutes.TECHNOLOGIES],
        translationKey: APP_ROUTES_TRANSLATION_KEYS[AppRoutes.TECHNOLOGIES],
        icon: APP_ROUTES_ICONS[AppRoutes.TECHNOLOGIES],
        order: 3,
        hasChildren: true,
        children: [],
        isActive: true,
        parentId: null,
    },
    {
        title: AppRoutes.EXPERIENCE,
        path: APP_ROUTES_PATHS[AppRoutes.EXPERIENCE],
        translationKey: APP_ROUTES_TRANSLATION_KEYS[AppRoutes.EXPERIENCE],
        icon: APP_ROUTES_ICONS[AppRoutes.EXPERIENCE],
        order: 4,
        hasChildren: false,
        children: [],
        isActive: true,
        parentId: null,
    },
    {
        title: AppRoutes.DOWNLOAD_CV,
        path: APP_ROUTES_PATHS[AppRoutes.DOWNLOAD_CV],
        translationKey: APP_ROUTES_TRANSLATION_KEYS[AppRoutes.DOWNLOAD_CV],
        icon: APP_ROUTES_ICONS[AppRoutes.DOWNLOAD_CV],
        order: 5,
        hasChildren: false,
        children: [],
        isActive: true,
        parentId: null,
    },
];
