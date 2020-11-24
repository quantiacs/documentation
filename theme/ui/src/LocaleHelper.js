export default class LocaleHelper {

    static getCurrentLocale() {
        const relativeUrl = window.location.pathname;
        if (relativeUrl.includes('/en/')) {
            return 'en';
        }
        if (relativeUrl.includes('/ru/')) {
            return 'ru';
        }
        return 'ru';
    }

    static getUrlRU() {
        return LocaleHelper.getUrlFor('ru');
    }

    static getUrlEN() {
        return LocaleHelper.getUrlFor('en');
    }

    static getUrlFor(newLocale) {
        const currentLocale = LocaleHelper.getCurrentLocale();
        const currentUrl = window.location.pathname;
        return currentUrl.split(`/${currentLocale}/`).join(`/${newLocale}/`);
    }
}