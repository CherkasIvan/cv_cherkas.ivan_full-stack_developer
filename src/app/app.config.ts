import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {
    provideHttpClient,
    withFetch,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {
    ApplicationConfig,
    importProvidersFrom,
    isDevMode,
    provideZoneChangeDetection,
} from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
    provideRouter,
    withHashLocation,
    withInMemoryScrolling,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';

import { createTranslateLoader } from '@core/service/translate-loader-creator/translate-loader-creator.service';
import { COLOR_THEME } from '@core/theme/color-theme.const';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        MessageService,
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideHttpClient(withFetch(), withInterceptorsFromDi()),
        provideClientHydration(),
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
                preset: COLOR_THEME,
                options: {
                    prefix: 'p',
                    darkModeSelector: '.dark-mode',
                    cssLayer: false,
                },
            },
        }),
        importProvidersFrom(
            TranslateModule.forRoot({
                fallbackLang: 'en',
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
