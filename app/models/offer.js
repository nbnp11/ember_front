import DS from 'ember-data';

export default DS.Model.extend({
  offertype: DS.attr('string'),
  block: DS.belongsTo('block'),
});
