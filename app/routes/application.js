import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    return this.store.findAll('resource')
      .then(() => this.store.findAll('foo'))
      .then(foos => foos.get('firstObject').belongsTo('resource').value());
  }
});
