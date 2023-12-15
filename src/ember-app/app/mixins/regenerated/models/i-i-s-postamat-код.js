import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сгенКод: DS.attr('number'),
  получатель: DS.belongsTo('i-i-s-postamat-получатель', { inverse: null, async: false })
});

export let ValidationRules = {
  сгенКод: {
    descriptionKey: 'models.i-i-s-postamat-код.validations.сгенКод.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  получатель: {
    descriptionKey: 'models.i-i-s-postamat-код.validations.получатель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КодE', 'i-i-s-postamat-код', {
    сгенКод: attr('Сген код', { index: 0 }),
    получатель: belongsTo('i-i-s-postamat-получатель', 'Получатель', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('КодL', 'i-i-s-postamat-код', {
    сгенКод: attr('Сген код', { index: 0 }),
    получатель: belongsTo('i-i-s-postamat-получатель', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
