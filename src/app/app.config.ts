import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {
    ApplicationConfig,
    importProvidersFrom,
    isDevMode,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
    provideRouter,
    withHashLocation,
    withInMemoryScrolling,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import { Observable } from 'rxjs';

import { providePrimeNG } from 'primeng/config';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';

// Кастомный TranslateLoader
export class CustomTranslateLoader implements TranslateLoader {
    constructor(private http: HttpClient) {}

    getTranslation(lang: string): Observable<any> {
        return this.http.get(`./assets/i18n/${lang}.json`);
    }
}

export function createTranslateLoader(http: HttpClient): TranslateLoader {
    return new CustomTranslateLoader(http);
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
        provideRouter(
            routes,
            withHashLocation(),
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
            }),
        ),
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },
        providePrimeNG({
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: '.dark-mode',
                    cssLayer: false,
                },
            },
        }),
        importProvidersFrom(
            TranslateModule.forRoot({
                defaultLanguage: 'en',
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [HttpClient],
                },
            }),
        ),
        provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000',
        }),
    ],
};
