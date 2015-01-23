import Ember from 'ember';
import ENV from '../../../config/environment';

export default Ember.Controller.extend({
	updateSuccess: false,
	updateError: false,
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
				self.set('updateSuccess', true);
				self.set('updateError', false);
			}, function(){
				self.set('updateSuccess', false);
				self.set('updateError', true);
			});
		}
	}
});
