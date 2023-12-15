import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.postamat.caption'),
          title: i18n.t('forms.application.sitemap.postamat.title'),
          children: [{
            link: 'i-i-s-postamat-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.postamat.i-i-s-postamat-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat.i-i-s-postamat-служба-доставки-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-postamat-получатель-l',
            caption: i18n.t('forms.application.sitemap.postamat.i-i-s-postamat-получатель-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat.i-i-s-postamat-получатель-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-postamat-постамат-l',
            caption: i18n.t('forms.application.sitemap.postamat.i-i-s-postamat-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat.i-i-s-postamat-постамат-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-postamat-хранение-l',
            caption: i18n.t('forms.application.sitemap.postamat.i-i-s-postamat-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat.i-i-s-postamat-хранение-l.title'),
            children: null
          }, {
            link: 'i-i-s-postamat-логистика-l',
            caption: i18n.t('forms.application.sitemap.postamat.i-i-s-postamat-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat.i-i-s-postamat-логистика-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-postamat-код-l',
            caption: i18n.t('forms.application.sitemap.postamat.i-i-s-postamat-код-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat.i-i-s-postamat-код-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-postamat-транзакция-l',
            caption: i18n.t('forms.application.sitemap.postamat.i-i-s-postamat-транзакция-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat.i-i-s-postamat-транзакция-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-postamat-адрес-l',
            caption: i18n.t('forms.application.sitemap.postamat.i-i-s-postamat-адрес-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat.i-i-s-postamat-адрес-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})