import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатПостEnum from '../enums/i-i-s-postamat-стат-пост';

export default FlexberryEnum.extend({
  enum: СтатПостEnum,
  sourceType: 'IIS.Postamat.СтатПост'
});
