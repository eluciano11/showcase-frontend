import Ember from 'ember';
import ENV from '../../../config/environment';

export default Ember.Route.extend({
	model: function(){
		return Ember.$.getJSON(ENV.APP.backendHost + ENV.APP.backendNamespace + '/users/me');
	}
});
