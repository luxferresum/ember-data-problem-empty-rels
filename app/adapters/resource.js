import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  findAll() {
    return {
      data: [{
        id: 'r1',
        type: 'resource',
      }],
      included: [{
        id: 'r1',
        type: 'resource',
        attributes: {
          name: 'foo name'
        },
        relationships: {
          foos: {
            links: {
              related: '/resource/should/never/get/called/related',
              self: '/resource/should/never/get/called/self',
            }
          },
        },
      }],
    };
  }
});
