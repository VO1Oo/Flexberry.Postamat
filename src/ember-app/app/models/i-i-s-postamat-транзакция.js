import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТранзакцияMixin
} from '../mixins/regenerated/models/i-i-s-postamat-транзакция';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТранзакцияMixin, Validations, {
});

defineProjections(Model);

export default Model;
