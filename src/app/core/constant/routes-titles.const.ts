import { AppRoutes } from '@core/enum/routes.enum';

export const APP_ROUTES_TRANSLATION_KEYS = {
    [AppRoutes.HOME]: 'ROUTES.HOME',
    [AppRoutes.PROJECTS]: 'ROUTES.PROJECTS',
    [AppRoutes.TECHNOLOGIES]: 'ROUTES.TECHNOLOGIES',
    [AppRoutes.EXPERIENCE]: 'ROUTES.EXPERIENCE',
    [AppRoutes.DOWNLOAD_CV]: 'ROUTES.DOWNLOAD_CV',
} as const;

export type AppRouteTranslationKey = keyof typeof APP_ROUTES_TRANSLATION_KEYS;
