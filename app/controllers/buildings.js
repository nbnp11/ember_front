import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createBuilding: function() {
      var controller = this;
      var params = {
        bclass: this.get('bclass'),
        street: this.get('street'),
    housenumber: this.get('housenumber'),
        floors: this.get('floors'),
      };
      var building = this.store.createRecord('building', params);
      building.save().then(function() {
        alert('saved');
        controller.set('bclass', '');
        controller.set('street', '');
        controller.set('housenumber', '');
        controller.set('floors', '');
      }).catch(function(reason) {
        alert(reason);
      });
      return params;
    },
  },
});