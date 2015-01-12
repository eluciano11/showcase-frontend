import Ember from 'ember';

export default Ember.Controller.extend({
	specificData: '',
	actions: {
		something: function(){
			var result = this.store.find('project', 1);
			this.set('specificData', result);
		}
	}
});
