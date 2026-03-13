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
// Firebase imports - исправляем порядок импортов
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
    provideRouter,
    withHashLocation,
    withInMemoryScrolling,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import { environment } from '@env/environment';

import { createTranslateLoader } from '@core/service/translate-loader-creator/translate-loader-creator.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideHttpClient(withFetch(), withInterceptorsFromDi()),
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

        // Инициализация Firebase - ВАЖЕН ПОРЯДОК

        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage()),
        provideAuth(() => getAuth()),

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
