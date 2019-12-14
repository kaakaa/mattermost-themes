const en = require('./en.json');
const ja = require('./ja.json');

import {addLocaleData} from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import jaLocaleData from 'react-intl/locale-data/ja';

addLocaleData(enLocaleData);
addLocaleData(jaLocaleData);

export const translationMessages = {
    en,
    ja,
};

export const chooseLocale = (locale) => {
    switch (locale) {
    case 'en':
        return translationMessages.en;
    case 'ja':
        return translationMessages.ja;
    default:
        return translationMessages.en;
    }
};
