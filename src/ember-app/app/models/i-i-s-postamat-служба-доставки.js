import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СлужбаДоставкиMixin
} from '../mixins/regenerated/models/i-i-s-postamat-служба-доставки';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СлужбаДоставкиMixin, Validations, {
});

defineProjections(Model);

export default Model;
