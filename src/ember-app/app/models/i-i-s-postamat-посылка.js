import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПосылкаMixin
} from '../mixins/regenerated/models/i-i-s-postamat-посылка';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПосылкаMixin, Validations, {
});

defineProjections(Model);

export default Model;
