import { AppRoutes } from '@core/enum/routes.enum';

export interface NavRoute {
    route: AppRoutes;
    path: string;
    translationKey: string;
    icon?: string;
}
