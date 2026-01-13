import { isPlatformBrowser } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    PLATFORM_ID,
    Renderer2,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ToggleSwitch } from 'primeng/toggleswitch';

import { FooterMediaLinks } from './components/footer-media-links/footer-media-links';

@Component({
    selector: 'cv-layout',
    standalone: true,
    imports: [MenubarModule, ToggleSwitch, FormsModule, FooterMediaLinks],
    templateUrl: './layout.html',
    styleUrl: './layout.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {
    items: MenuItem[] | undefined;
    isDarkMode = false;
    isSwitching = false;

    constructor(
        private renderer: Renderer2,
        @Inject(PLATFORM_ID) private platformId: any,
    ) {}

    ngOnInit() {
        // Загружаем сохраненную тему
        if (isPlatformBrowser(this.platformId)) {
            const savedTheme = localStorage.getItem('theme') || 'light';
            this.isDarkMode = savedTheme === 'dark-mode';
        }

        // Инициализация меню
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                routerLink: '/home',
            },
            {
                label: 'Features',
                icon: 'pi pi-star',
                routerLink: '/projects',
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Components',
                        icon: 'pi pi-bolt',
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server',
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil',
                    },
                    {
                        label: 'Templates',
                        icon: 'pi pi-palette',
                        items: [
                            {
                                label: 'Apollo',
                                icon: 'pi pi-palette',
                            },
                            {
                                label: 'Ultima',
                                icon: 'pi pi-palette',
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope',
                routerLink: '/contact',
            },
        ];
    }

    toggleDarkMode() {
        const element = document.querySelector('html');
        element!.classList.toggle('dark-mode');
    }
}
