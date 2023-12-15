import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  оплата: DS.attr('i-i-s-postamat-оплата'),
  сумма: DS.attr('decimal'),
  получатель: DS.belongsTo('i-i-s-postamat-получатель', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-postamat-транзакция.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-postamat-транзакция.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-postamat-транзакция.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оплата: {
    descriptionKey: 'models.i-i-s-postamat-транзакция.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-postamat-транзакция.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  получатель: {
    descriptionKey: 'models.i-i-s-postamat-транзакция.validations.получатель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТранзакцияE', 'i-i-s-postamat-транзакция', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    оплата: attr('Оплата', { index: 3 }),
    сумма: attr('Сумма', { index: 4 }),
    получатель: belongsTo('i-i-s-postamat-получатель', 'Получатель', {
      фИО: attr('ФИО', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ТранзакцияL', 'i-i-s-postamat-транзакция', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    оплата: attr('Оплата', { index: 3 }),
    сумма: attr('Сумма', { index: 4 }),
    получатель: belongsTo('i-i-s-postamat-получатель', 'ФИО', {
      фИО: attr('ФИО', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
