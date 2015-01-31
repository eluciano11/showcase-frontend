import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(){
		var controller = this.controllerFor('application');
		controller.set('inEditProject', true);
		controller.set('normalNav', false);
	},
	model: function(params){
		return this.store.find('project', params.project_id);
	},
	setupController: function(controller, model){
		controller.set('model', model);
		controller.set('selectedDepartment', model.get('department'));
		controller.set('selectedUniversity', model.get('university'));
		controller.set('universities', this.store.find('university'));
		controller.set('departments', this.store.find('department'));
		controller.set('src', model.get('screenshot'));
	},
	actions: {
		willTransition: function(){
			var controller = this.controllerFor('application');
			controller.set('inEditProject', false);
			controller.set('normalNav', true);
		}
	}
});
