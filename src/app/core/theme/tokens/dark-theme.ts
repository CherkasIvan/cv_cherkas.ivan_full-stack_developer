export const DARK_THEME = {
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
    footer: {
        background: '{purple.700}',
        textColor: '#ffffff',
        borderColor: '{purple.600}',
        hoverBackground: '{purple.600}',
    },
    fieldset: {
        // Эти токены будут доступны через {fieldset.xxx}
        background: 'rgba(17, 24, 39, 0.7)',
        borderColor: '{surface.300}',
        color: '{surface.50}',
        legendBackground: '{surface.50}',
        legendColor: '{surface.900}',
        borderRadius: '{border.radius.xl}',
    },
} as const;
