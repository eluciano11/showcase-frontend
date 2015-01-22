import Ember from 'ember';
import ENV from '../../../config/environment';

export default Ember.Controller.extend({
	userInfo: '',
	actions: {
		update: function(data){
			Ember.$.ajax({
				url: ENV.APP.backendHost + ENV.APP.backendNamespace + '/users/edit/me',
				type: 'PATCH',
				data: JSON.stringify(data),
				headers: {
					'Content-Type': "application/json"
				}
			}).then(function(response){
				console.log(response);
			});
		}
	}
});
