import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Controller.extend({
	file: null,
	displayDropbox: false,
	displayImagePreview: true,
	displayPreviewButtons: true,
	dropboxMessage: 'Drop a cover image here.',
	actions: {
		saveChanges: function(){
			var model = this.get('model');
			var changes = model.changedAttributes();
			var formData = new FormData();

			if(this.get('file') && !model.get('isDirty')){
				formData.append('screenshot', this.get('file'));
			}
			else if (this.get('file') && model.get('isDirty')){
				formData.append('screenshot', this.get('file'));
				if ('title' in changes) { formData.append('title', model.get('title')); }
				if ('summary' in changes) { formData.append('summary', model.get('summary')); }
				if ('story' in changes) { formData.append('story', model.get('story')); }
				if ('university' in changes) { formData.append('university', model.get('university')); }
				if ('department' in changes) { formData.append('department', model.get('department')); }
			}

			var self = this;

			if (model.get('isDirty') && !this.get('file')){
				var  data = {};

				if ('title' in changes) { data.title = model.get('title'); } 
				if ('summary' in changes) { data.summary = model.get('summary'); }
				if ('story' in changes) { data.story = model.get('story'); }
				if ('university' in changes) { data.university = model.get('university'); }
				if ('department' in changes) { data.department = model.get('department'); }

				Ember.$.ajax({
					url: ENV.APP.backendHost + ENV.APP.backendNamespace + '/projects/' + model.get('id'),
					type: 'PATCH',
					data: JSON.stringify(data),
					headers: {
						'Content-Type': "application/json"
					}
				});
			} else{
				Ember.$.ajax({
					url: ENV.APP.backendHost + ENV.APP.backendNamespace + '/projects/' + model.get('id'),
					type: 'PATCH',
					data: formData,
					processData: false,  // tell jQuery not to process the data
						contentType: false   // tell jQuery not to set contentType
				}).then(function(response){
					self.set('model', self.store.find('project', response.id));
				});
			}


			this.transitionToRoute('projects.specific', model.get('id'));
		},
		cancelChanges: function(){
			var model = this.get('model');
			model.rollback();
		}
	}
});
