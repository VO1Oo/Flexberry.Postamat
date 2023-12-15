import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat-посылка', 'Unit | Model | i-i-s-postamat-посылка', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-postamat-адрес',
    'model:i-i-s-postamat-код',
    'model:i-i-s-postamat-логистика',
    'model:i-i-s-postamat-получатель',
    'model:i-i-s-postamat-постамат',
    'model:i-i-s-postamat-посылка',
    'model:i-i-s-postamat-служба-доставки',
    'model:i-i-s-postamat-транзакция',
    'model:i-i-s-postamat-хранение',
    'model:i-i-s-postamat-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
