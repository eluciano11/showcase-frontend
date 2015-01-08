/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'showcase-frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:token',
      crossOriginWhitelist: ['http://localhost:8000']
    };

    ENV['simple-auth-token'] = {
      //this is for development. 
      serverTokenEndpoint: 'http://localhost:8000/api/auth/login',
      identificationField: 'email',
      tokenPropertyName: 'token',
      authorizationPrefix: 'JWT',
      authorizationHeaderName: 'Authorization',
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
