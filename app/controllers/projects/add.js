import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		add: function(){
			var data = this.getProperties('title', 'summary', 'university', 'department', 'story');
			var project = this.store.createRecord('project', {
				title: data.title,
				summary: data.summary,
				university: data.university,
				department: data.department,
				story: data.story
			});
			project.save();
		},
		dismiss: function(){
			this.set('hasFailed', false);
			this.set('hasSucceeded', false);
		}
	}
});
