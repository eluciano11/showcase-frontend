import Ember from 'ember';

export default Ember.View.extend({
	templateName: 'alerts',
	actions: {
		dismiss: function(){
			var controller = this.get('controller');
			if (controller.get('displaySuccessNotification')) { controller.set('displaySuccessNotification', false); }
			if (controller.get('displayErrorNotification')) { controller.set('displayErrorNotification', false); }
		}
	}
});
