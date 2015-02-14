import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		this.set('id', params.university_id);
		return this.store.find('project', { university: params.university_id });
	},
	setupController: function(controller, model){
		controller.set('university', this.store.find('university', this.get('id')));
		controller.set('projects', model);
	}
});
