import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Controller.extend(ApplicationRouteMixin, {
	inAddProject: false,
	actions: {
		add: function(){
			this.controllerFor('projects.add').send('add');
		}
	}
});
