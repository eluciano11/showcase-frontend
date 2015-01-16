import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return Ember.$.getJSON('http://localhost:8000/api/users/me');
	}
});
