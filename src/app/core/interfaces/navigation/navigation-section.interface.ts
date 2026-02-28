import { NavigationLink } from './navigation-link.interface';

export interface NavigationSection {
    id?: string;
    name: string;
    translationKey: string;
    links: NavigationLink[];
    order: number;
}
