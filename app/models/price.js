import DS from 'ember-data';

export default DS.Model.extend({
  value: DS.attr('number'),
  currency: DS.attr('string'),
  offer: DS.belongsTo('offer')
});
