import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		var slug = this.modelFor('users.edit.specific').user_slug;
		return this.store.find('user', slug);
	}
});
