import {
  defineNamespace,
  defineProjections,
  Model as ХранениеMixin
} from '../mixins/regenerated/models/i-i-s-postamat-хранение';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ХранениеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
