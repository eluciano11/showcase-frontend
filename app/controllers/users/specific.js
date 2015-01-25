import Ember from 'ember';

export default Ember.Controller.extend({
	projects: function(){
		console.log(this.get('model'));
	}
});
