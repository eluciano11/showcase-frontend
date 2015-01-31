import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.find('project', { user: this.get('session.currentUser').id });
	}
});
