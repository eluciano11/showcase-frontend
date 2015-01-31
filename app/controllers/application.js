import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Controller.extend(ApplicationRouteMixin, {
	needs: ['projects/add', 'projects/edit'],
	inAddProject: false,
	inEditProject: false,
	normalNav: true,
	actions: {
		add: function(){
			var controller = this.get('controllers.projects/add');
			controller.send('add');
		},
		edit: function(){
			var controller = this.get('controllers.projects/edit');
			controller.send('saveChanges');
		}
	}
});
