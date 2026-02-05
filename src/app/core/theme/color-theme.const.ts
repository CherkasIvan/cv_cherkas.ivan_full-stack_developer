import { definePreset } from '@primeuix/themes';
import { $dt } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const duration = $dt('transition.duration');

export const COLOR_THEME = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                highlight: {
                    background: '{primary.50}',
                    color: '{primary.700}',
                },
                surface: {
                    0: '#ffffff',
                    50: '{indigo.50}',
                    100: '{indigo.100}',
                    200: '{indigo.200}',
                    300: '{indigo.300}',
                    400: '{indigo.400}',
                    500: '{indigo.500}',
                    600: '{indigo.600}',
                    700: '{indigo.700}',
                    800: '{indigo.800}',
                    900: '{indigo.900}',
                    950: '{indigo.950}',
                },
            },
            dark: {
                highlight: {
                    background: '{primary.200}',
                    color: '{primary.900}',
                },
                surface: {
                    0: '#ffffff',
                    50: '{purple.50}',
                    100: '{purple.100}',
                    200: '{purple.200}',
                    300: '{purple.300}',
                    400: '{purple.400}',
                    500: '{purple.500}',
                    600: '{purple.600}',
                    700: '{purple.700}',
                    800: '{purple.800}',
                    900: '{purple.900}',
                    950: '{purple.950}',
                },
            },
        },
    },
});
