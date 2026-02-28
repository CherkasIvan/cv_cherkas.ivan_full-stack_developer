import { firebaseConfig } from '@core/constant/firebase.const';

export const environment = {
    production: false,
    baseHref: '/',
    platform: 'default',
    apiUrl: 'http://localhost:4200',
    firebase: firebaseConfig,
};
