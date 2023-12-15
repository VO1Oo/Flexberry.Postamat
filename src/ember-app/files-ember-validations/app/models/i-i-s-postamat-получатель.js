import {
  defineNamespace,
  defineProjections,
  Model as ПолучательMixin
} from '../mixins/regenerated/models/i-i-s-postamat-получатель';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПолучательMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
