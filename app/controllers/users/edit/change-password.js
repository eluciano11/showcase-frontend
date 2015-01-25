import Ember from 'ember';
import ENV from '../../../config/environment';

export default Ember.Controller.extend({
	actions: {
		updateSuccess: false,
		updateFail: false,
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
				self.set('updateSuccess', true);
				self.set('updateFail', false);
			}, function(){
				self.set('updateSuccess', false);
				self.set('updateFail', true);
			});
		}
	}
});
