import 'react-i18next';
import en from 'src/i18n/en.json';
import fr from 'src/i18n/fr.json';

declare module 'react-i18next' {
  interface Resources {
    en: typeof en;
    fr: typeof fr;
  }
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      en: typeof en;
      fr: typeof fr;
    };
  }
}
