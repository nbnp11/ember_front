import DS from 'ember-data';

export default DS.Model.extend({
  pricevalue: DS.attr('number'),
  currency: DS.attr('number'),
  offer: DS.belongsTo('offer')
});
