import { Routes } from '@angular/router';

import { AppRoutes } from './core/enums/routes.enum';

export const routes: Routes = [
    {
        path: '',
        redirectTo: AppRoutes.HOME,
        pathMatch: 'full',
    },
    {
        path: AppRoutes.HOME,
        loadComponent: () =>
            import('./pages/home/home-page').then((m) => m.HomePage),
        data: { title: 'Главная' },
    },
    {
        path: AppRoutes.PROJECTS,
        loadComponent: () =>
            import('./pages/projects/projects-page').then(
                (m) => m.ProjectsPage,
            ),
        data: { title: 'Проекты' },
    },
    {
        path: AppRoutes.TECHNOLOGIES,
        loadComponent: () =>
            import('./pages/technologies/technologies-page').then(
                (m) => m.TechnologiesPage,
            ),
        data: { title: 'Технологии' },
    },
    {
        path: AppRoutes.WORK_EXPERIENCE,
        loadComponent: () =>
            import('./pages/experience/experience-page').then(
                (m) => m.ExperiencePage,
            ),
        data: { title: 'Опыт работы' },
    },
    {
        path: AppRoutes.EDUCATION,
        loadComponent: () =>
            import('./pages/education/education-page').then(
                (m) => m.EducationPage,
            ),
        data: { title: 'Образование' },
    },
    {
        path: '**',
        redirectTo: AppRoutes.HOME,
    },
];
