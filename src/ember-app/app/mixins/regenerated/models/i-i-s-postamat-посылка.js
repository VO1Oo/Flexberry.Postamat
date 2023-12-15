import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерПост: DS.attr('number'),
  номерЯчейки: DS.attr('number'),
  номПосылки: DS.attr('number'),
  код: DS.belongsTo('i-i-s-postamat-код', { inverse: null, async: false }),
  логистика: DS.belongsTo('i-i-s-postamat-логистика', { inverse: null, async: false }),
  транзакция: DS.belongsTo('i-i-s-postamat-транзакция', { inverse: null, async: false }),
  хранение: DS.belongsTo('i-i-s-postamat-хранение', { inverse: 'посылка', async: false })
});

export let ValidationRules = {
  номерПост: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.номерПост.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерЯчейки: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.номерЯчейки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номПосылки: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.номПосылки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  логистика: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.логистика.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  транзакция: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.транзакция.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-postamat-посылка.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосылкаE', 'i-i-s-postamat-посылка', {
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
  });
};
