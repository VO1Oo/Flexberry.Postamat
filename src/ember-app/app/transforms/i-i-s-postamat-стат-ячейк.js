import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатЯчейкEnum from '../enums/i-i-s-postamat-стат-ячейк';

export default FlexberryEnum.extend({
  enum: СтатЯчейкEnum,
  sourceType: 'IIS.Postamat.СтатЯчейк'
});
