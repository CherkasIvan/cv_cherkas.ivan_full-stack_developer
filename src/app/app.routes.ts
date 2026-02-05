import { Routes } from '@angular/router';

import { EducationPageComponent } from '@pages/education/education-page.component';
import { ExperiencePageComponent } from '@pages/experience/experience-page.component';
import { HomePageComponent } from '@pages/home/home-page.component';
import { ProjectsPageComponent } from '@pages/projects/projects-page.component';
import { TechnologiesPageComponent } from '@pages/technologies/technologies-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomePageComponent,
        data: { title: 'Главная' },
    },
    {
        path: 'projects',
        component: ProjectsPageComponent,
        data: { title: 'Проекты' },
    },
    {
        path: 'technologies',
        component: TechnologiesPageComponent,
        data: { title: 'Технологии' },
    },
    {
        path: 'work-experience',
        component: ExperiencePageComponent,
        data: { title: 'Опыт работы' },
    },
    {
        path: 'education',
        component: EducationPageComponent,
        data: { title: 'Образование' },
    },
    {
        path: '**',
        redirectTo: '/home',
    },
];
