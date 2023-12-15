import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерЯчейи: DS.attr('number'),
  статус: DS.attr('i-i-s-postamat-стат-ячейк'),
  хранение: DS.belongsTo('i-i-s-postamat-хранение', { inverse: null, async: false }),
  постамат: DS.belongsTo('i-i-s-postamat-постамат', { inverse: 'ячейка', async: false })
});

export let ValidationRules = {
  номерЯчейи: {
    descriptionKey: 'models.i-i-s-postamat-ячейка.validations.номерЯчейи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-postamat-ячейка.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-postamat-ячейка.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  постамат: {
    descriptionKey: 'models.i-i-s-postamat-ячейка.validations.постамат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЯчейкаE', 'i-i-s-postamat-ячейка', {
    номерЯчейи: attr('Номер ячейи', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    хранение: belongsTo('i-i-s-postamat-хранение', 'Хранение', {
      номер: attr('Номер', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'номер' })
  });
};
