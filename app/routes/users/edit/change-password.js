import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		var id = this.modelFor('users.edit').user_id;
		return this.store.find('user', id);
	}
});