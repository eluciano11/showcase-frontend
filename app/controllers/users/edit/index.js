import Ember from 'ember';
import ENV from '../../../config/environment';

export default Ember.Controller.extend({
	successMessage: 'Your account was updated successfully.',
	errorMessage: 'Something when wrong. Your account was not updated.',
	actions: {
		update: function(){
			var data = this.get('model');
			var self = this;
			Ember.$.ajax({
				url: ENV.APP.backendHost + ENV.APP.backendNamespace + '/users/edit/me',
				type: 'PATCH',
				data: JSON.stringify(data),
				headers: {
					'Content-Type': "application/json"
				}
			}).then(function(){
				self.set('displaySuccessNotification', true);
				self.set('displayErrorNotification', false);
			}, function(){
				self.set('displaySuccessNotification', false);
				self.set('displayErrorNotification', true);
			});
		}
	}
});
