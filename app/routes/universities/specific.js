import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return this.store.find('university', params.university_slug);
	},
	serialize: function(model){
		return { university_slug: model.get('slug') }
	}
});
