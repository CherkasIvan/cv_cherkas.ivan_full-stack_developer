import { AppRoutes } from '@core/enum/routes.enum';

export const AppRoutesPaths = {
    [AppRoutes.HOME]: '/home',
    [AppRoutes.PROJECTS]: '/projects',
    [AppRoutes.TECHNOLOGIES]: '/technologies',
    [AppRoutes.EXPERIENCE]: '/experience',
    [AppRoutes.DOWNLOAD_CV]: '/download-cv',
} as const;

export type AppRoute = keyof typeof AppRoutes;
