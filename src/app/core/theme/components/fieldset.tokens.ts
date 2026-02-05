import { DARK_THEME, LIGHT_THEME } from '../tokens';

// Генератор токенов для Fieldset
export const getFieldsetTokens = (isDarkMode: boolean) => {
    return isDarkMode ? DARK_THEME.fieldset : LIGHT_THEME.fieldset;
};

// Кастомные стили для конкретных Fieldset в Layout
export const LAYOUT_FIELDSET_STYLES = {
    // Для левого Fieldset
    leftFieldset: {
        background: 'rgba(255, 255, 255, 0.9)',
        borderColor: '{primary.200}',
        legendBackground: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
        legendColor: '#ffffff',
        borderRadius: '{border.radius.xl}',
        boxShadow: '0 4px 20px rgba(102, 126, 234, 0.15)',
    },

    // Для правого Fieldset
    rightFieldset: {
        background: 'rgba(249, 250, 251, 0.95)',
        borderColor: '{surface.200}',
        legendBackground: '{surface.50}',
        legendColor: '{surface.900}',
        borderRadius: '{border.radius.xl}',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    },

    // Для темной темы
    darkModeOverrides: {
        leftFieldset: {
            background: 'rgba(31, 41, 55, 0.8)',
            borderColor: '{purple.400}',
            legendBackground:
                'linear-gradient(90deg, #7c3aed 0%, #8b5cf6 100%)',
            legendColor: '#ffffff',
            boxShadow: '0 4px 20px rgba(124, 58, 237, 0.25)',
        },
        rightFieldset: {
            background: 'rgba(17, 24, 39, 0.7)',
            borderColor: '{surface.400}',
            legendBackground: '{surface.100}',
            legendColor: '{surface.50}',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        },
    },
} as const;
