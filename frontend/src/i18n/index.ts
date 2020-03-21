import { get } from 'lodash';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import ptBR from 'src/i18n/pt-BR';
import en from 'src/i18n/en';

let currentLanguageCode = null;

const languages = {
  en: {
    id: 'en',
    label: 'English',
    flag: '/assets/images/flags/24/United-States.png',
    dictionary: en,
    materialLocale: 'en',
    owlDateTimeLocale: 'en',
  },
  'pt-BR': {
    id: 'pt-BR',
    label: 'Português',
    flag: '/assets/images/flags/24/Brazil.png',
    dictionary: ptBR,
    materialLocale: 'pt-br',
    owlDateTimeLocale: 'pt-BR',
  },
};

function init() {
  currentLanguageCode =
    localStorage.getItem('language') || 'en';
  setLanguageCode(currentLanguageCode);
}

export function getLanguage() {
  return languages[getLanguageCode()];
}

function format(message, args) {
  if (!message) {
    return null;
  }

  try {
    return message.replace(/{(\d+)}/g, function(
      match,
      number,
    ) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match;
    });
  } catch (error) {
    console.error(message, error);
    throw error;
  }
}

export function getLanguages() {
  return Object.keys(languages).map((language) => {
    return languages[language];
  });
}

export function getLanguageCode() {
  if (!currentLanguageCode) {
    init();
  }

  return currentLanguageCode;
}

export function setLanguageCode(arg) {
  if (!languages[arg]) {
    throw new Error(`Invalid language ${arg}.`);
  }

  moment.locale(arg);
  localStorage.setItem('language', arg);
}

export function i18nExists(key) {
  const message = get(getLanguage().dictionary, key);
  return !!message;
}

export function i18n(key, ...args) {
  const message = get(getLanguage().dictionary, key);

  if (!message) {
    return key;
  }

  return format(message, args);
}
