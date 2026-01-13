const { strings, normalize } = require('@angular-devkit/core');
const {
    apply,
    mergeWith,
    template,
    url,
    move,
    chain,
} = require('@angular-devkit/schematics');
const { validateName } = require('./schema');

function generateComponent(options) {
    // Валидация имени
    const validatedName = validateName(options.name);
    const componentName = strings.classify(validatedName);
    const fileName = strings.dasherize(validatedName);
    const selectorPrefix = options.prefix || 'cv';

    // Определяем путь
    const targetPath = normalize(
        `src/app/${options.path || 'components'}/${fileName}`,
    );

    // Шаблонные параметры
    const templateSource = apply(url('./files'), [
        template({
            ...strings,
            ...options,
            componentName,
            fileName,
            selector: `${selectorPrefix}-${fileName}`,
            withSignals: options.withSignals !== false,
            withPrimeNG: options.withPrimeNG === true,
        }),
        move(targetPath),
    ]);

    return chain([mergeWith(templateSource)]);
}

module.exports = generateComponent;
