import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ХранениеMixin
} from '../mixins/regenerated/models/i-i-s-postamat-хранение';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ХранениеMixin, Validations, {
});

defineProjections(Model);

export default Model;
