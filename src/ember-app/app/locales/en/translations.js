import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPostamatАдресLForm from './forms/i-i-s-postamat-адрес-l';
import IISPostamatКодLForm from './forms/i-i-s-postamat-код-l';
import IISPostamatЛогистикаLForm from './forms/i-i-s-postamat-логистика-l';
import IISPostamatПолучательLForm from './forms/i-i-s-postamat-получатель-l';
import IISPostamatПостаматLForm from './forms/i-i-s-postamat-постамат-l';
import IISPostamatСлужбаДоставкиLForm from './forms/i-i-s-postamat-служба-доставки-l';
import IISPostamatТранзакцияLForm from './forms/i-i-s-postamat-транзакция-l';
import IISPostamatХранениеLForm from './forms/i-i-s-postamat-хранение-l';
import IISPostamatАдресEForm from './forms/i-i-s-postamat-адрес-e';
import IISPostamatКодEForm from './forms/i-i-s-postamat-код-e';
import IISPostamatЛогистикаEForm from './forms/i-i-s-postamat-логистика-e';
import IISPostamatПолучательEForm from './forms/i-i-s-postamat-получатель-e';
import IISPostamatПостаматEForm from './forms/i-i-s-postamat-постамат-e';
import IISPostamatСлужбаДоставкиEForm from './forms/i-i-s-postamat-служба-доставки-e';
import IISPostamatТранзакцияEForm from './forms/i-i-s-postamat-транзакция-e';
import IISPostamatХранениеEForm from './forms/i-i-s-postamat-хранение-e';
import IISPostamatАдресModel from './models/i-i-s-postamat-адрес';
import IISPostamatКодModel from './models/i-i-s-postamat-код';
import IISPostamatЛогистикаModel from './models/i-i-s-postamat-логистика';
import IISPostamatПолучательModel from './models/i-i-s-postamat-получатель';
import IISPostamatПостаматModel from './models/i-i-s-postamat-постамат';
import IISPostamatПосылкаModel from './models/i-i-s-postamat-посылка';
import IISPostamatСлужбаДоставкиModel from './models/i-i-s-postamat-служба-доставки';
import IISPostamatТранзакцияModel from './models/i-i-s-postamat-транзакция';
import IISPostamatХранениеModel from './models/i-i-s-postamat-хранение';
import IISPostamatЯчейкаModel from './models/i-i-s-postamat-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-postamat-адрес': IISPostamatАдресModel,
    'i-i-s-postamat-код': IISPostamatКодModel,
    'i-i-s-postamat-логистика': IISPostamatЛогистикаModel,
    'i-i-s-postamat-получатель': IISPostamatПолучательModel,
    'i-i-s-postamat-постамат': IISPostamatПостаматModel,
    'i-i-s-postamat-посылка': IISPostamatПосылкаModel,
    'i-i-s-postamat-служба-доставки': IISPostamatСлужбаДоставкиModel,
    'i-i-s-postamat-транзакция': IISPostamatТранзакцияModel,
    'i-i-s-postamat-хранение': IISPostamatХранениеModel,
    'i-i-s-postamat-ячейка': IISPostamatЯчейкаModel
  },

  'application-name': 'Postamat',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Postamat',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Postamat',
          title: 'Postamat'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        postamat: {
          caption: 'Postamat',
          title: 'Postamat',
          'i-i-s-postamat-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-postamat-получатель-l': {
            caption: 'Получатель',
            title: ''
          },
          'i-i-s-postamat-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-postamat-хранение-l': {
            caption: 'Хранение',
            title: ''
          },
          'i-i-s-postamat-логистика-l': {
            caption: 'Логистика',
            title: ''
          },
          'i-i-s-postamat-код-l': {
            caption: 'Код',
            title: ''
          },
          'i-i-s-postamat-транзакция-l': {
            caption: 'Транзакция',
            title: ''
          },
          'i-i-s-postamat-адрес-l': {
            caption: 'Адрес',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-postamat-адрес-l': IISPostamatАдресLForm,
    'i-i-s-postamat-код-l': IISPostamatКодLForm,
    'i-i-s-postamat-логистика-l': IISPostamatЛогистикаLForm,
    'i-i-s-postamat-получатель-l': IISPostamatПолучательLForm,
    'i-i-s-postamat-постамат-l': IISPostamatПостаматLForm,
    'i-i-s-postamat-служба-доставки-l': IISPostamatСлужбаДоставкиLForm,
    'i-i-s-postamat-транзакция-l': IISPostamatТранзакцияLForm,
    'i-i-s-postamat-хранение-l': IISPostamatХранениеLForm,
    'i-i-s-postamat-адрес-e': IISPostamatАдресEForm,
    'i-i-s-postamat-код-e': IISPostamatКодEForm,
    'i-i-s-postamat-логистика-e': IISPostamatЛогистикаEForm,
    'i-i-s-postamat-получатель-e': IISPostamatПолучательEForm,
    'i-i-s-postamat-постамат-e': IISPostamatПостаматEForm,
    'i-i-s-postamat-служба-доставки-e': IISPostamatСлужбаДоставкиEForm,
    'i-i-s-postamat-транзакция-e': IISPostamatТранзакцияEForm,
    'i-i-s-postamat-хранение-e': IISPostamatХранениеEForm
  },

});

export default translations;
