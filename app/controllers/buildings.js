import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  showblock: false,
  showoffer: false,
  showprice: false,
  actions: {
    createBuilding: function() {
      var controller = this;
      // собираем форму здания в building_params, рабоатет всегда
      var building_params = {
        bclass: this.get('bclass'),
        street: this.get('street'),
    housenumber: this.get('housenumber'),
        floors: this.get('floors'),
      };
      var building = this.store.createRecord('building', building_params);
      if (this.get('showblock')) {
        // если showblock == true - собрать форму блока в block_params
        var block_params = {
          area: this.get('area'),
          floor: this.get('floor')
        };
        var block = this.store.createRecord('block', block_params, building)
      }
      if (this.get('showoffer')) {
        // если showoffer == true - собрать форму сделки в offer_params
        var offer_params = {
          offertype: this.get('offertype'),
        };
        var offer = this.store.createRecord('offer', offer_params, block)
      }
      if (this.get('showprice')) {
        // если showprice == true - собрать форму цены в price_params
        var price_params = {
          pricevalue: this.get('pricevalue'),
          currency: this.get('currency')
        };
        var price = this.store.createRecord('price', price_params, offer)
      }
      // возвращем POST запрос с параметрами building_params,
      //                                     block_params,
      //                                     offer_params,
      //                                     price_params
      return $.post('buildings', { data: { building_params: building_params,
                                                    block_params: block_params,
                                                    offer_params: offer_params,
                                                    price_params: price_params} }).then(function() {
        alert('saved');
        // очищаем форму
        controller.set('bclass', '');
        controller.set('street', '');
        controller.set('housenumber', '');
        controller.set('floors', '');
        controller.set('area', '');
        controller.set('floor', '');
        controller.set('offertype', '');
        controller.set('pricevalue', '');
        controller.set('currency', '');
      }).catch(function(reason) {
        // вывод ошибки если сохранить не удалось и перезагрузить страницу
        alert(reason);
        window.location.reload(true);
      });
    },
    showBlock: function() {
      // Меняем showblock что бы открыть форму блока
      this.toggleProperty('showblock');
    },
    showOffer: function() {
      // Меняем showoffer что бы открыть форму сделки
      this.toggleProperty('showoffer');
    },
    showPrice: function() {
      // Меняем showзкшсу что бы открыть форму цены
      this.toggleProperty('showprice');
    },
  },
});