import {
  defineNamespace,
  defineProjections,
  Model as АдресMixin
} from '../mixins/regenerated/models/i-i-s-postamat-адрес';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АдресMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
