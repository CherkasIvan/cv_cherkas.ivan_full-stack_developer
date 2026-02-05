export const LIGHT_THEME = {
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
    footer: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        textColor: '#ffffff',
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    fieldset: {
        // Эти токены будут доступны через {fieldset.xxx}
        background: '{surface.0}',
        borderColor: '{surface.300}',
        color: '{surface.900}',
        legendBackground: '{surface.50}',
        legendColor: '{surface.900}',
        borderRadius: '{border.radius.xl}',
    },
} as const;
