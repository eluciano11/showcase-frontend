import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(){
		this.controllerFor('application').set('inAddProject', true);
	},
	model: function(){
		return this.store.createRecord('project');
	},
	setupController: function(controller, model){
		controller.set('departments', this.store.find('department'));
		controller.set('universities', this.store.find('university'));
		controller.set('model', model);
	},
	actions: {
		willTransition: function(){
			this.controllerFor('application').set('inAddProject', false);
		}
	}
});
