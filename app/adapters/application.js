import DS from 'ember-data';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default DS.RESTAdapter.extend(ApplicationRouteMixin, {
	host: 'http://localhost:8000',
	namespace: 'api',
	headers: {
		'Content-Type': 'application/json'
	}
});
