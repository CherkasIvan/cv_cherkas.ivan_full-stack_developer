import { definePreset } from '@primeuix/themes';
import { $dt } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

import { DARK_THEME, LIGHT_THEME } from './tokens';

export const duration = $dt('transition.duration');

export const COLOR_THEME = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                highlight: LIGHT_THEME.highlight,
                surface: LIGHT_THEME.surface,
                footer: LIGHT_THEME.footer,
                fieldset: LIGHT_THEME.fieldset, // Добавляем fieldset в semantic
            },
            dark: {
                highlight: DARK_THEME.highlight,
                surface: DARK_THEME.surface,
                footer: DARK_THEME.footer,
                fieldset: DARK_THEME.fieldset, // Добавляем fieldset в semantic
            },
        },
    },
    components: {
        fieldset: {
            root: {
                background: '{fieldset.background}',
                borderColor: '{fieldset.borderColor}',
                borderRadius: '{fieldset.borderRadius}',
                color: '{fieldset.color}',
                padding: '{spacing.4}',
                transitionDuration: '{transition.duration}',
            },
            legend: {
                background: '{fieldset.legendBackground}',
                color: '{fieldset.legendColor}',
                borderRadius: '{border.radius.md}',
                padding: '{spacing.3} {spacing.4}',
                fontWeight: '600',
                borderColor: '{fieldset.borderColor}',
                borderWidth: '1px',
                hoverBackground: '{primary.100}',
                hoverColor: '{primary.700}',
            },
            toggleIcon: {
                color: '{fieldset.color}',
                hoverColor: '{primary.500}',
            },
            content: {
                padding: '{spacing.4}',
            },
        },
    },
} as const);
