import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Controller.extend(ApplicationRouteMixin, {
	needs: ['projects/add'],
	inAddProject: false,
	actions: {
		add: function(){
			var controller = this.get('controllers.projects/add');
			controller.send('add');
		}
	}
});
