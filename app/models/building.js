import DS from 'ember-data';

export default DS.Model.extend({
  bClass: DS.attr('string'),
  street: DS.attr('string'),
  houseNumber: DS.attr('string'),
  floors: DS.attr('number')
});
