import Ember from 'ember';

export default Ember.Controller.extend({
	file: null,
	actions: {
		add: function(){
			var data = this.getProperties('title', 'summary', 'university', 'department', 'story');
			
			var formData = new FormData();
			formData.append('title', data.title);
			formData.append('summary', data.summary);
			formData.append('university', data.university);
			formData.append('department', data.department);
			formData.append('story', data.story);
			formData.append('screenshot', this.get('file'));

			var self = this;

			Ember.$.ajax({
				url: 'http://localhost:8000/api/projects',
				type: 'POST',
				data: formData,
				processData: false,  // tell jQuery not to process the data
  				contentType: false   // tell jQuery not to set contentType
			}).then(function(response){
				self.store.find('project', response.id);
				self.transitionToRoute('projects.specific', response.id);
			});
		},
		dismiss: function(){
			this.set('hasFailed', false);
			this.set('hasSucceeded', false);
		}
	}
});
