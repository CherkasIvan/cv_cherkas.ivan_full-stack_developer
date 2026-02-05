import { isPlatformBrowser } from '@angular/common';
import {
    Inject,
    Injectable,
    PLATFORM_ID,
    computed,
    signal,
} from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private readonly isBrowser: boolean;

    readonly theme = signal<ThemeMode>('light');
    readonly isDarkMode = computed(() => this.theme() === 'dark');

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.isBrowser = isPlatformBrowser(this.platformId);
        this.initializeTheme();
    }

    private initializeTheme(): void {
        if (!this.isBrowser) return;

        const savedTheme =
            (localStorage.getItem('theme') as ThemeMode) || 'light';
        this.theme.set(savedTheme);
        this.applyTheme(savedTheme);
    }

    toggleTheme(): void {
        if (!this.isBrowser) return;

        const newTheme: ThemeMode = this.isDarkMode() ? 'light' : 'dark';
        this.theme.set(newTheme);
        this.applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    setTheme(theme: ThemeMode): void {
        if (!this.isBrowser) return;

        this.theme.set(theme);
        this.applyTheme(theme);
        localStorage.setItem('theme', theme);
    }

    private applyTheme(theme: ThemeMode): void {
        if (!this.isBrowser) return;

        const htmlElement = document.documentElement;

        if (theme === 'dark') {
            htmlElement.classList.add('dark-mode');
        } else {
            htmlElement.classList.remove('dark-mode');
        }
    }
}
