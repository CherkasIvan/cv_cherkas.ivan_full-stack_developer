import { firebaseConfig } from '@core/constant/firebase.const';

export const environment = {
    production: true,
    baseHref: '/', // Netlify размещает в корне
    platform: 'netlify',
    apiUrl: window.location.origin, // Автоматически определяет текущий домен
    firebase: firebaseConfig,
};
