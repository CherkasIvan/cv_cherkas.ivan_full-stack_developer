import { Routes } from '@angular/router';

import { EducationPage } from '@pages/education/education-page';
import { ExperiencePage } from '@pages/experience/experience-page';
import { HomePage } from '@pages/home/home-page';
import { ProjectsPage } from '@pages/projects/projects-page';
import { TechnologiesPage } from '@pages/technologies/technologies-page';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomePage,
        data: { title: 'Главная' },
    },
    {
        path: 'projects',
        component: ProjectsPage,
        data: { title: 'Проекты' },
    },
    {
        path: 'technologies',
        component: TechnologiesPage,
        data: { title: 'Технологии' },
    },
    {
        path: 'work-experience',
        component: ExperiencePage,
        data: { title: 'Опыт работы' },
    },
    {
        path: 'education',
        component: EducationPage,
        data: { title: 'Образование' },
    },
    {
        path: '**',
        redirectTo: '/home',
    },
];
