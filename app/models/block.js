import DS from 'ember-data';

export default DS.Model.extend({
  area: DS.attr('number'),
  floor: DS.attr('number'),
  building: DS.belongsTo('building'),
  offers: DS.hasMany('offers')
});
