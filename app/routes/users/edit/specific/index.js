import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		var slug = this.modelFor('users.edit.specific').user_slug;
		return this.store.find('user', slug);
	},
	serialize: function(model){
		return { user_slug: model.get('slug') }
	}
});
