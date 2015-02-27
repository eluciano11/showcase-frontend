import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://show-case.herokuapp.com/',
	namespace: 'api'
});