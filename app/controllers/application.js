import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Controller.extend(ApplicationRouteMixin, {
	needs: ['projects/add', 'projects/edit'],
	inAddProject: false,
	inEditProject: false,
	normalNav: true,
	isDisabled: true,
	actions: {
		add: function(){
			this.get('controllers.projects/add').send('add');
		},
		saveEdit: function(){
			this.get('controllers.projects/edit').send('saveChanges');
		},
		cancelEdit: function(){
			this.get('controllers.projects/edit').send('cancelChanges');
		}
	}
});
