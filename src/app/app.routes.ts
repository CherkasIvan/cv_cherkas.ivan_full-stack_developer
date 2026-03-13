import { Routes } from '@angular/router';

import { AppRoutes } from './core/enum/routes.enum';

export const routes: Routes = [
    {
        path: '',
        redirectTo: AppRoutes.HOME,
        pathMatch: 'full',
    },
    {
        path: AppRoutes.HOME,
        loadComponent: () =>
            import('./pages/home/home-page.component').then(
                (m) => m.HomePageComponent,
            ),
        data: { title: 'Главная' },
    },
    {
        path: AppRoutes.PROJECTS,
        redirectTo: `${AppRoutes.PROJECTS}/public`,
        pathMatch: 'full',
    },
    {
        path: `${AppRoutes.PROJECTS}/:type`,
        loadComponent: () =>
            import('./pages/projects/projects-page.component').then(
                (m) => m.ProjectsPageComponent,
            ),
        data: { title: 'Проекты' },
    },
    {
        path: `${AppRoutes.TECHNOLOGIES}/frontend`,
        loadComponent: () =>
            import('./pages/technologies/technologies-page.component').then(
                (m) => m.TechnologiesPageComponent,
            ),
        pathMatch: 'full',
    },
    {
        path: `${AppRoutes.TECHNOLOGIES}/:type`,
        loadComponent: () =>
            import('./pages/technologies/technologies-page.component').then(
                (m) => m.TechnologiesPageComponent,
            ),
        data: { title: 'Технологии' },
    },
    {
        path: `${AppRoutes.EXPERIENCE}/work_experience`,
        loadComponent: () =>
            import('./pages/experience/experience-page.component').then(
                (m) => m.ExperiencePageComponent,
            ),
        pathMatch: 'full',
    },
    {
        path: `${AppRoutes.EXPERIENCE}/:type`,
        loadComponent: () =>
            import('./pages/experience/experience-page.component').then(
                (m) => m.ExperiencePageComponent,
            ),
        data: { title: 'Опыт работы' },
    },
    {
        path: `${AppRoutes.DOWNLOAD_CV}/new_cv`,
        loadComponent: () =>
            import('./pages/download-cv/download-cv.component').then(
                (m) => m.DownloadCvComponent,
            ),
        pathMatch: 'full',
    },
    {
        path: `${AppRoutes.DOWNLOAD_CV}/:type`,
        loadComponent: () =>
            import('./pages/download-cv/download-cv.component').then(
                (m) => m.DownloadCvComponent,
            ),
        data: { title: 'Скачать CV' },
    },
    {
        path: '**',
        redirectTo: AppRoutes.HOME,
    },
];
