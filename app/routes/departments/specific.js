import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return this.store.find('department', params.department_slug);
	},
	serialize: function(model){
		return { department_slug: model.get('slug') };
	}
});
