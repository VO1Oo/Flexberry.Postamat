import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЯчейкаMixin
} from '../mixins/regenerated/models/i-i-s-postamat-ячейка';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЯчейкаMixin, Validations, {
});

defineProjections(Model);

export default Model;
