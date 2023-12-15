import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  информация: DS.attr('string'),
  номер: DS.attr('number'),
  состояние: DS.attr('i-i-s-postamat-состояние'),
  службаДоставки: DS.belongsTo('i-i-s-postamat-служба-доставки', { inverse: null, async: false })
});

export let ValidationRules = {
  информация: {
    descriptionKey: 'models.i-i-s-postamat-логистика.validations.информация.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-postamat-логистика.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-postamat-логистика.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  службаДоставки: {
    descriptionKey: 'models.i-i-s-postamat-логистика.validations.службаДоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЛогистикаE', 'i-i-s-postamat-логистика', {
    номер: attr('Номер', { index: 0 }),
    информация: attr('Информация', { index: 1 }),
    состояние: attr('Состояние', { index: 2 }),
    службаДоставки: belongsTo('i-i-s-postamat-служба-доставки', 'Служба доставки', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ЛогистикаL', 'i-i-s-postamat-логистика', {
    номер: attr('Номер', { index: 0 }),
    информация: attr('Информация', { index: 1 }),
    состояние: attr('Состояние', { index: 2 }),
    службаДоставки: belongsTo('i-i-s-postamat-служба-доставки', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
