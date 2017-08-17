import Ember from 'ember';

export default Ember.Route.extend({
  async model() {

    // first load foos with id-relations to not yet loaded resources
    // the model has resource: hasMany('resource')
    // and the relationship is resource : { data: { id: 'r1', type: 'resource' } }
    // however resource r1 is NOT sideloaded
    const foos = await this.store.findAll('foo');
    
    // now we load all resources, including all that were referenced by foos
    // this means after this the resource 'r1' is loaded!
    await this.store.findAll('resource');

    // and now the relationship is null on ember-data 2.14.10.
    // this works on ember-data 2.13
    return foos.get('firstObject').belongsTo('resource').value();
  }
});
