import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-postamat-адрес-l');
  this.route('i-i-s-postamat-адрес-e',
  { path: 'i-i-s-postamat-адрес-e/:id' });
  this.route('i-i-s-postamat-адрес-e.new',
  { path: 'i-i-s-postamat-адрес-e/new' });
  this.route('i-i-s-postamat-код-l');
  this.route('i-i-s-postamat-код-e',
  { path: 'i-i-s-postamat-код-e/:id' });
  this.route('i-i-s-postamat-код-e.new',
  { path: 'i-i-s-postamat-код-e/new' });
  this.route('i-i-s-postamat-логистика-l');
  this.route('i-i-s-postamat-логистика-e',
  { path: 'i-i-s-postamat-логистика-e/:id' });
  this.route('i-i-s-postamat-логистика-e.new',
  { path: 'i-i-s-postamat-логистика-e/new' });
  this.route('i-i-s-postamat-получатель-l');
  this.route('i-i-s-postamat-получатель-e',
  { path: 'i-i-s-postamat-получатель-e/:id' });
  this.route('i-i-s-postamat-получатель-e.new',
  { path: 'i-i-s-postamat-получатель-e/new' });
  this.route('i-i-s-postamat-постамат-l');
  this.route('i-i-s-postamat-постамат-e',
  { path: 'i-i-s-postamat-постамат-e/:id' });
  this.route('i-i-s-postamat-постамат-e.new',
  { path: 'i-i-s-postamat-постамат-e/new' });
  this.route('i-i-s-postamat-служба-доставки-l');
  this.route('i-i-s-postamat-служба-доставки-e',
  { path: 'i-i-s-postamat-служба-доставки-e/:id' });
  this.route('i-i-s-postamat-служба-доставки-e.new',
  { path: 'i-i-s-postamat-служба-доставки-e/new' });
  this.route('i-i-s-postamat-транзакция-l');
  this.route('i-i-s-postamat-транзакция-e',
  { path: 'i-i-s-postamat-транзакция-e/:id' });
  this.route('i-i-s-postamat-транзакция-e.new',
  { path: 'i-i-s-postamat-транзакция-e/new' });
  this.route('i-i-s-postamat-хранение-l');
  this.route('i-i-s-postamat-хранение-e',
  { path: 'i-i-s-postamat-хранение-e/:id' });
  this.route('i-i-s-postamat-хранение-e.new',
  { path: 'i-i-s-postamat-хранение-e/new' });
});

export default Router;
