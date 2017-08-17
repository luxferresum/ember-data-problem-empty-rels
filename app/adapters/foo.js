import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  findAll() {
    return {
      data: [{
        id: 'f1',
        type: 'foo',
      }],
      included: [{
        id: 'f1',
        type: 'foo',
        attributes: {
          name: 'foo name'
        },
        relationships: {
          resource: {
            data: {
              id: 'r1',
              type: 'resource',
              links: {
                related: '/foos/should/never/get/called/related',
                self: '/foos/should/never/get/called/self',
              }
            },
          },
        },
      }],
    };
  }
});
