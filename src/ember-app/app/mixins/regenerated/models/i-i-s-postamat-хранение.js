import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗавершения: DS.attr('date'),
  датаНачала: DS.attr('date'),
  номер: DS.attr('number'),
  посылка: DS.hasMany('i-i-s-postamat-посылка', { inverse: 'хранение', async: false })
});

export let ValidationRules = {
  датаЗавершения: {
    descriptionKey: 'models.i-i-s-postamat-хранение.validations.датаЗавершения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-postamat-хранение.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-postamat-хранение.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  посылка: {
    descriptionKey: 'models.i-i-s-postamat-хранение.validations.посылка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьПолучE', 'i-i-s-postamat-хранение', {
    
  });

  modelClass.defineProjection('ХранениеE', 'i-i-s-postamat-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    посылка: hasMany('i-i-s-postamat-посылка', 'Посылка', {
      номПосылки: attr('Номер посылки', { index: 0 }),
      номерПост: attr('Номер постамата', { index: 1 }),
      номерЯчейки: attr('Номер ячейки', { index: 2 }),
      логистика: belongsTo('i-i-s-postamat-логистика', 'Информация', {
        информация: attr('Информация', { index: 4, hidden: true })
      }, { index: 9, hidden: true }),
      транзакция: belongsTo('i-i-s-postamat-транзакция', 'Транзакция', {
        дата: attr('Дата оплаты', { index: 5 }),
        время: attr('Время оплаты', { index: 6, hidden: true }),
        оплата: attr('Статус оплаты', { index: 7 }),
        сумма: attr('Сумма', { index: 8 })
      }, { index: 3, displayMemberPath: 'время' }),
      код: belongsTo('i-i-s-postamat-код', 'Код', {
        сгенКод: attr('Сгенерировать код', { index: 11, hidden: true })
      }, { index: 10, displayMemberPath: 'сгенКод' })
    })
  });

  modelClass.defineProjection('ХранениеL', 'i-i-s-postamat-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 })
  });
};
