import { AppRoutes } from '@core/enum/routes.enum';

export const APP_ROUTES_ICONS = {
    [AppRoutes.HOME]: 'home',
    [AppRoutes.PROJECTS]: 'folder',
    [AppRoutes.TECHNOLOGIES]: 'code',
    [AppRoutes.EXPERIENCE]: 'work',
    [AppRoutes.DOWNLOAD_CV]: 'download',
} as const;

export type AppRouteIcon = keyof typeof APP_ROUTES_ICONS;
