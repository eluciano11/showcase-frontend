import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Controller.extend({
	needs: ['application'],
	title: '',
	summary: '',
	university: null,
	department: null,
	story: '',
	screenshot: '',
	file: null,
	displayImagePreview: false,
	displayDropbox: true,
	displayPreviewButtons: false,
	filledFieldsCount: 0,
	dropboxMessage: 'Drop a screenshot here.',
	successMessage: 'Your project was added successfully.',
	errorMessage: 'Your project was not added.',
	displayPictureSelector: true,
	isReadyToSave: function(){
		var data = this.getProperties('title', 'summary', 'university', 'department', 'story');

		var status = null;

		var completedArray = [];
		for(var key in data){
			if (data[key] !== '' && data[key] != null){
				completedArray.push(key);
			}
		}

		if(this.get('file') && this.get('coverPreview')){
			completedArray.push('file', 'coverPreview');
		} else if (this.get('file')){
			completedArray.push('file');
		} else if(this.get('coverPreview')){
			completedArray.push('coverPreview');
		}


		if (completedArray.length === 7){
			status = true;
		} else {
			status = false;
		}

		var applicationController = this.get('controllers.application');
		
		if (status){
			applicationController.set('progressBar', '100%');
		} else {
			if (completedArray.length !== 0){
				applicationController.set('progressBar', ((15 * completedArray.length)  + '%'));
			} else {
				applicationController.set('progressBar', '5%');
			}
		}

		applicationController.set('display', status);
	}.observes('title', 'summary', 'university', 'department', 'story', 'file', 'coverPreview'),
	coverOptions: [
		{
			"img": 'https://s3-us-west-2.amazonaws.com/com-showcase/images/IMG_2015-02-23+12%3A41%3A51.jpg',
		},
		{
			"img": 'https://s3-us-west-2.amazonaws.com/com-showcase/images/IMG_2015-02-23+12%3A43%3A37.jpg',
		},
		{
			"img": 'https://s3-us-west-2.amazonaws.com/com-showcase/images/IMG_2015-02-23+12%3A43%3A34.jpg',
		},
		{
			"img": 'https://s3-us-west-2.amazonaws.com/com-showcase/images/IMG_2015-02-23+12%3A42%3A42.jpg',
		},
		{
			"img": 'https://s3-us-west-2.amazonaws.com/com-showcase/images/IMG_2015-02-23+12%3A42%3A37.jpg',
		},
		{
			"img": 'https://s3-us-west-2.amazonaws.com/com-showcase/images/IMG_2015-02-23+12%3A42%3A29.jpg',
		}
	],
	actions: {
		add: function(){
			var data = this.getProperties('title', 'summary', 'university', 'department', 'story', 'cover');
			
			var formData = new FormData();
			formData.append('title', data.title);
			formData.append('summary', data.summary);
			formData.append('university', data.university);
			formData.append('department', data.department);
			formData.append('story', data.story);
			formData.append('screenshot', this.get('file'));
			formData.append('cover', this.get('coverPreview'));

			var self = this;

			Ember.$.ajax({
				url: ENV.APP.backendHost + '/' + ENV.APP.backendNamespace + '/projects',
				type: 'POST',
				data: formData,
				processData: false,  // tell jQuery not to process the data
  				contentType: false,   // tell jQuery not to set contentType
  				headers: {
  					Authorization: 'JWT ' + self.get('session.token')
  				}
			}).then(function(response){
				self.set('displaySuccessNotification', true);
				self.set('displayErrorNotification', false);
				self.store.find('project', response.id);
				self.transitionToRoute('projects.specific', response.id);
			}, function(){
				self.set('displayErrorNotification', true);
				self.set('displaySuccessNotification', false);
			});
		},
		coverPreview: function(src){
			this.set('coverPreview', src);
			this.set('displayPictureSelector', false);
			this.set('displayCoverPreviewButtons', true);
		},
		saveCover: function(){
			this.set('displayCoverPreviewButtons', false);
		},
		cancelCover: function(){
			this.set('displayCoverPreviewButtons', false);
			this.set('displayPictureSelector', true);
		}
	}
});
