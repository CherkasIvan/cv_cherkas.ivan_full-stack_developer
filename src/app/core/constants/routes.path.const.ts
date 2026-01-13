import { AppRoutes } from '@core/enums/routes.enum';

export const AppRoutesPaths = {
    [AppRoutes.HOME]: '/home',
    [AppRoutes.PROJECTS]: '/projects',
    [AppRoutes.TECHNOLOGIES]: '/technologies',
    [AppRoutes.WORK_EXPERIENCE]: '/work-experience',
    [AppRoutes.EDUCATION]: '/education',
} as const;

export type AppRoute = keyof typeof AppRoutes;
