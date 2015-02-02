import Ember from 'ember';
import ENV from '../../../config/environment';

export default Ember.Controller.extend({
	successMessage: 'Your update was changed successfully.',
	errorMessage: 'An error occurred. Your updates was not successful.',
	actions: {
		update: function(){
			var data = this.getProperties('currentPassword', 'password1', 'password2');
			var self = this;
			Ember.$.ajax({
				url: ENV.APP.backendHost + ENV.APP.backendNamespace + '/users/edit/me/change_password',
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
