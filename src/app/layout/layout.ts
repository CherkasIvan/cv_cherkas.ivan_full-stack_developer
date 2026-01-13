import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ToggleSwitch } from 'primeng/toggleswitch';

@Component({
    selector: 'cv-layout',
    standalone: true,
    imports: [MenubarModule, ToggleSwitch, FormsModule],
    templateUrl: './layout.html',
    styleUrl: './layout.scss',
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
            this.isDarkMode = savedTheme === 'dark';

            if (this.isDarkMode) {
                this.applyDarkMode(true);
            }
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

    async toggleDarkMode() {
        if (this.isSwitching) return;

        this.isSwitching = true;
        this.isDarkMode = !this.isDarkMode;

        if (isPlatformBrowser(this.platformId)) {
            // Добавляем класс анимации
            this.renderer.addClass(document.body, 'theme-switching');

            // Применяем задержку перед сменой темы
            setTimeout(() => {
                this.applyDarkMode(this.isDarkMode);

                // Сохраняем в localStorage
                localStorage.setItem(
                    'theme',
                    this.isDarkMode ? 'dark' : 'light',
                );

                // Убираем класс анимации после завершения
                setTimeout(() => {
                    this.renderer.removeClass(document.body, 'theme-switching');
                    this.isSwitching = false;
                }, 600);
            }, 100);
        }
    }

    private applyDarkMode(isDark: boolean) {
        const htmlElement = document.documentElement;

        if (isDark) {
            this.renderer.addClass(htmlElement, 'dark-mode');
            this.renderer.setAttribute(htmlElement, 'data-theme', 'dark');
        } else {
            this.renderer.removeClass(htmlElement, 'dark-mode');
            this.renderer.setAttribute(htmlElement, 'data-theme', 'light');
        }

        // Также обновляем PrimeNG тему
        this.updatePrimeNGTheme(isDark);
    }

    private updatePrimeNGTheme(isDark: boolean) {
        // Если используете PrimeNG с конфигом, обновляем тему
        // Эта часть зависит от того, как вы настроили PrimeNG
        const themeLink = document.getElementById(
            'prime-theme',
        ) as HTMLLinkElement;
        if (themeLink) {
            // Добавляем плавный переход
            themeLink.style.transition = 'all 0.6s ease';

            // Если нужно переключить CSS файл темы
            // themeLink.href = isDark ?
            //     'path/to/dark/theme.css' :
            //     'path/to/light/theme.css';
        }
    }
}
