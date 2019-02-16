import DS from 'ember-data';

export default DS.Model.extend({
  offerType: DS.attr('string'),
  block: DS.belongsTo('block', { inverse: 'blocks' }),
});
