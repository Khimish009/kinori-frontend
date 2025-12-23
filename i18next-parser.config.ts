export default {
    locales: ['ru', 'en', 'de', 'es', 'fr', 'it'],
    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    input: ['src/**/*.{js,jsx,ts,tsx}'],

    createOldCatalogs: false,
    failOnWarnings: false,
    failOnUpdate: false,

    func: {
        list: ['t', 'i18next.t', 'i18n.t'],
    },

    sort: true,
    verbose: true,
};
