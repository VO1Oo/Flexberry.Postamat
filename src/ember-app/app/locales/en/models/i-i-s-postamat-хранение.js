export default {
  projections: {
    ЗаписьПолучE: {
    },
    ХранениеE: {
      номер: {
        __caption__: 'Номер'
      },
      датаНачала: {
        __caption__: 'Дата начала'
      },
      датаЗавершения: {
        __caption__: 'Дата завершения'
      },
      посылка: {
        __caption__: 'Посылка',
        номПосылки: {
          __caption__: 'Номер посылки'
        },
        номерПост: {
          __caption__: 'Номер постамата'
        },
        номерЯчейки: {
          __caption__: 'Номер ячейки'
        },
        логистика: {
          __caption__: 'Информация',
          информация: {
            __caption__: 'Информация'
          }
        },
        транзакция: {
          __caption__: 'Транзакция',
          дата: {
            __caption__: 'Дата оплаты'
          },
          время: {
            __caption__: 'Время оплаты'
          },
          оплата: {
            __caption__: 'Статус оплаты'
          },
          сумма: {
            __caption__: 'Сумма'
          }
        },
        код: {
          __caption__: 'Код',
          сгенКод: {
            __caption__: 'Сгенерировать код'
          }
        }
      }
    },
    ХранениеL: {
      номер: {
        __caption__: 'Номер'
      },
      датаНачала: {
        __caption__: 'Дата начала'
      },
      датаЗавершения: {
        __caption__: 'Дата завершения'
      }
    }
  },
  validations: {
    датаЗавершения: {
      __caption__: 'Дата завершения'
    },
    датаНачала: {
      __caption__: 'Дата начала'
    },
    номер: {
      __caption__: 'Номер'
    },
    посылка: {
      __caption__: 'Посылка'
    }
  }
};
