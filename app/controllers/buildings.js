import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  showblock: false,
  showoffer: false,
  showprice: false,
  actions: {
    createBuilding: function() {
      var controller = this;
      var building_params = {
        bclass: this.get('bclass'),
        street: this.get('street'),
    housenumber: this.get('housenumber'),
        floors: this.get('floors'),
      };
      var building = this.store.createRecord('building', building_params);
      if (this.get('showblock')) {
        console.log('trying to save block');
        var block_params = {
          area: this.get('area'),
          floor: this.get('floor')
        };
        console.log(block_params);
        var block = this.store.createRecord('block', block_params, building)
      }
      if (this.get('showoffer')) {
        var offer_params = {
          offertype: this.get('offertype'),
        };
        console.log(offer_params);
        var offer = this.store.createRecord('offer', offer_params, block)
      }
      if (this.get('showprice')) {
        var price_params = {
          pricevalue: this.get('pricevalue'),
          currency: this.get('currency')
        };
        console.log(price_params);
        var price = this.store.createRecord('price', price_params, offer)
      }
      return $.post('buildings', { data: { building_params: building_params,
                                                    block_params: block_params,
                                                    offer_params: offer_params,
                                                    price_params: price_params} }).then(function() {
        alert('saved');
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
        alert(reason);
        window.location.reload(true);
      });
    },
    showBlock: function() {
      this.toggleProperty('showblock');
      console.log('showblock');
    },
    showOffer: function() {
      this.toggleProperty('showoffer');
      console.log('showoffer');
    },
    showPrice: function() {
      this.toggleProperty('showprice');
      console.log('showprice');
    },
  },
});