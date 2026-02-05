import { ExperienceTab } from '@core/enum/experience-tab.enums';
import { ProjectTab } from '@core/enum/project-tab.enums';
import { AppRoutes } from '@core/enum/routes.enum';
import { TechnologyTab } from '@core/enum/technology-tab.enums';

import { NavigationItem } from '../interfaces/navigation-item.interface';

export const HEADER_NAVIGATION_ITEMS: NavigationItem[] = [
    {
        label: 'Home',
        translationKey: 'NAVIGATION.HOME',
        icon: 'pi pi-home',
        routerLink: AppRoutes.HOME,
    },
    {
        label: 'Projects',
        translationKey: 'NAVIGATION.PROJECTS',
        icon: 'pi pi-briefcase',
        children: [
            {
                label: 'All Projects',
                translationKey: 'NAVIGATION.ALL_PROJECTS',
                icon: 'pi pi-list',
                routerLink: AppRoutes.PROJECTS,
                queryParams: { tab: ProjectTab.ALL },
            },
            {
                label: 'Public Projects',
                translationKey: 'NAVIGATION.PUBLIC_PROJECTS',
                icon: 'pi pi-globe',
                routerLink: AppRoutes.PROJECTS,
                queryParams: { tab: ProjectTab.PUBLIC },
            },
            {
                label: 'Private Projects',
                translationKey: 'NAVIGATION.PRIVATE_PROJECTS',
                icon: 'pi pi-lock',
                routerLink: AppRoutes.PROJECTS,
                queryParams: { tab: ProjectTab.PRIVATE },
            },
        ],
    },
    {
        label: 'Technologies',
        translationKey: 'NAVIGATION.TECHNOLOGIES',
        icon: 'pi pi-code',
        children: [
            {
                label: 'Frontend',
                translationKey: 'NAVIGATION.FRONTEND',
                icon: 'pi pi-desktop',
                routerLink: AppRoutes.TECHNOLOGIES,
                queryParams: { tab: TechnologyTab.FRONTEND },
            },
            {
                label: 'Backend',
                translationKey: 'NAVIGATION.BACKEND',
                icon: 'pi pi-server',
                routerLink: AppRoutes.TECHNOLOGIES,
                queryParams: { tab: TechnologyTab.BACKEND },
            },
            {
                label: 'DevOps',
                translationKey: 'NAVIGATION.DEVOPS',
                icon: 'pi pi-cloud',
                routerLink: AppRoutes.TECHNOLOGIES,
                queryParams: { tab: TechnologyTab.DEVOPS },
            },
            {
                label: 'Other Technologies',
                translationKey: 'NAVIGATION.OTHER_TECHNOLOGIES',
                icon: 'pi pi-box',
                routerLink: AppRoutes.TECHNOLOGIES,
                queryParams: { tab: TechnologyTab.OTHER },
            },
        ],
    },
    {
        label: 'Experience',
        translationKey: 'NAVIGATION.EXPERIENCE',
        icon: 'pi pi-history',
        children: [
            {
                label: 'Work Experience',
                translationKey: 'NAVIGATION.WORK_EXPERIENCE',
                icon: 'pi pi-briefcase',
                routerLink: AppRoutes.EXPERIENCE,
                queryParams: { tab: ExperienceTab.WORK },
            },
            {
                label: 'Education Experience',
                translationKey: 'NAVIGATION.EDUCATION_EXPERIENCE',
                icon: 'pi pi-graduation-cap',
                routerLink: AppRoutes.EXPERIENCE,
                queryParams: { tab: ExperienceTab.EDUCATION },
            },
        ],
    },
    {
        label: 'Download CV',
        translationKey: 'NAVIGATION.DOWNLOAD_CV',
        icon: 'pi pi-download',
        routerLink: AppRoutes.DOWNLOAD_CV,
    },
] as const;

export const DRAWER_NAVIGATION_ITEMS: NavigationItem[] = [
    {
        label: 'Home',
        translationKey: 'NAVIGATION.HOME',
        icon: 'pi pi-home',
        routerLink: AppRoutes.HOME,
    },
    {
        label: 'Projects',
        translationKey: 'NAVIGATION.PROJECTS',
        icon: 'pi pi-briefcase',
        routerLink: AppRoutes.PROJECTS,
        queryParams: { tab: ProjectTab.PUBLIC },
    },
    {
        label: 'Technologies',
        translationKey: 'NAVIGATION.TECHNOLOGIES',
        icon: 'pi pi-code',
        routerLink: AppRoutes.TECHNOLOGIES,
        queryParams: { tab: TechnologyTab.FRONTEND },
    },
    {
        label: 'Experience',
        translationKey: 'NAVIGATION.EXPERIENCE',
        icon: 'pi pi-history',
        routerLink: AppRoutes.EXPERIENCE,
        queryParams: { tab: ExperienceTab.WORK },
    },
    {
        label: 'Download CV',
        translationKey: 'NAVIGATION.DOWNLOAD_CV',
        icon: 'pi pi-download',
        routerLink: AppRoutes.DOWNLOAD_CV,
    },
] as const;
