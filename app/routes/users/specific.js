import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return this.store.find('user', params.user_slug);
	},
	serialize: function(model){
		return { user_slug: model.get('slug') }
	}
});
