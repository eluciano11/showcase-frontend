import Ember from 'ember';

export default Ember.Route.extend({
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
	}
});
