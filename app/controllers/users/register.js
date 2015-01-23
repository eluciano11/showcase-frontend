import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Controller.extend({
	needs: ['login'],
	hasFailed: false,
	actions: {
		create: function(){
			var data = this.getProperties('firstName', 'lastName', 'email', 'password');
			var self = this;
			Ember.$.ajax({
				url: ENV.APP.backendHost + ENV.APP.backendNamespace + '/auth/signup',
				type: 'POST',
				data: JSON.stringify(data),
				headers: {
					'Content-Type': "application/json"
				}
			}).then(function(response){
				var controller = self.get('controllers.login');
				controller.set('successfullyCreated', true);
				controller.set('identification', response.email);
				self.transitionToRoute('login');
			}, function(){
				self.set('hasFailed', true);
			});
		}
	}
});
