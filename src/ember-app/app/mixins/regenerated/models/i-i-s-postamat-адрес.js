import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  службаДоставки: DS.belongsTo('i-i-s-postamat-служба-доставки', { inverse: null, async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-postamat-адрес.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  службаДоставки: {
    descriptionKey: 'models.i-i-s-postamat-адрес.validations.службаДоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АдресE', 'i-i-s-postamat-адрес', {
    адрес: attr('Адрес', { index: 0 }),
    службаДоставки: belongsTo('i-i-s-postamat-служба-доставки', 'Служба доставки', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('АдресL', 'i-i-s-postamat-адрес', {
    адрес: attr('Адрес', { index: 0 }),
    службаДоставки: belongsTo('i-i-s-postamat-служба-доставки', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
