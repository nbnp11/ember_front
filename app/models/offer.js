import DS from 'ember-data';

export default DS.Model.extend({
  offerType: DS.attr('string')
  block: belongTo('block', { inverse: 'blocks' }),
  price: hasOne('price')
});
