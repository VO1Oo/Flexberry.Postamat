import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  телефон: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  телефон: {
    descriptionKey: 'models.i-i-s-postamat-получатель.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-postamat-получатель.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПолучательE', 'i-i-s-postamat-получатель', {
    фИО: attr('ФИО', { index: 0 }),
    телефон: attr('Телефон', { index: 1 })
  });

  modelClass.defineProjection('ПолучательL', 'i-i-s-postamat-получатель', {
    фИО: attr('ФИО', { index: 0 }),
    телефон: attr('Телефон', { index: 1 })
  });
};
