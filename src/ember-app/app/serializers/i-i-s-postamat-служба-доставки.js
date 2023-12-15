import { Serializer as СлужбаДоставкиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-postamat-служба-доставки';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СлужбаДоставкиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
