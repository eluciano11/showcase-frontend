import Ember from 'ember';

export default Ember.Controller.extend({
	departments: '',
	universities: '',
	hasFailed: false,
	hasSucceeded: false,
	actions: {
		add: function(model){
			var self = this;
			model.save().then(function(){
				self.set('hasFailed', false);
				self.set('hasSucceeded', true);
			}, function(){
				self.set('hasFailed', true);
				self.set('hasSucceeded', false);
			});
		},
		dismiss: function(){
			this.set('hasFailed', false);
			this.set('hasSucceeded', false);
		}
	}
});
