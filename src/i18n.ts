import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        translations: {
            'Learn React': 'Learn React',
        },
    },
    ja: {
        translations: {
            'Learn React': 'Reactを学習する',
        },
    },
}

export const defaultConfig: object = {
    resources: resources,
    lng: 'en',
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
}

i18n.use(initReactI18next).init(defaultConfig)

export default i18n
