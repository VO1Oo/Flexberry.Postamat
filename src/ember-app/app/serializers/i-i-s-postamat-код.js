import { Serializer as КодSerializer } from
  '../mixins/regenerated/serializers/i-i-s-postamat-код';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КодSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
