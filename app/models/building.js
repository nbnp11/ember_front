import DS from 'ember-data';

export default DS.Model.extend({
  bclass: DS.attr('string'),
  street: DS.attr('string'),
  housenumber: DS.attr('string'),
  floors: DS.attr('number'),
  blocks: DS.hasMany('block')
});
