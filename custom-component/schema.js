module.exports = {
    validateName: (name) => {
        if (!name || name.length < 3) {
            throw new Error(
                'Имя компонента должно содержать минимум 3 символа',
            );
        }
        if (!/^[a-zA-Z]/.test(name)) {
            throw new Error('Имя компонента должно начинаться с буквы');
        }
        return name;
    },
};
