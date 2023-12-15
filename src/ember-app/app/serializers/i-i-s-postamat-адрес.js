import { Serializer as АдресSerializer } from
  '../mixins/regenerated/serializers/i-i-s-postamat-адрес';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АдресSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
