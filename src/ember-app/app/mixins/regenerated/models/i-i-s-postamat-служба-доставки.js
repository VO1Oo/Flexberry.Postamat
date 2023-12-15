import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  наименование: DS.attr('string'),
  номер: DS.attr('number'),
  телефон: DS.attr('number')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-postamat-служба-доставки.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-postamat-служба-доставки.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-postamat-служба-доставки.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-postamat-служба-доставки.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СлужбаДоставкиE', 'i-i-s-postamat-служба-доставки', {
    номер: attr('Номер', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    телефон: attr('Телефон', { index: 3 })
  });

  modelClass.defineProjection('СлужбаДоставкиL', 'i-i-s-postamat-служба-доставки', {
    номер: attr('Номер', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    телефон: attr('Телефон', { index: 3 })
  });
};
