import Ember from 'ember';

export default Ember.View.extend({
	needs: ['controllers.projects/add', 'controllers.projects/edit'],
	templateName: 'dropbox',
	dragEnter: function(event){
		event.preventDefault();
		document.getElementById('dropzone').className = "dropzone dragover";
	},
	dragOver: function(event){
		event.preventDefault();
		document.getElementById('dropzone').className = 'dropzone dragover';
	},
	drop: function(event) {
	 	event.preventDefault();
	 	var files = event.dataTransfer.files;
	 	var controller = this.get('controller');

	 	if(files.length === 1){
	 		var fileUploaded;
	 		for (var i = 0; i >= 0; i--) {
				fileUploaded = files[i];
			}
			controller.set('file', fileUploaded);

			var render = new FileReader();

			render.readAsDataURL(fileUploaded);
			render.onload = function(imgsrc){
				controller.set('src', imgsrc.target.result);
				controller.set('displayDropbox', false);
				controller.set('displayImagePreview', true);
				controller.set('displayPreviewButtons', true);
			};
	 	}
	 	else{
	 		console.log('motherfucker!');
	 		console.log(files);
	 	}
	},
	actions: {
		cancel: function() {
			var controller = this.get('controller');
			controller.set('src', '');
			controller.set('displayDropbox', true);
			controller.set('displayImagePreview', false);
			controller.set('displayPreviewButtons', false);
		},
		save: function() {
			var controller = this.get('controller');
			controller.set('displayPreviewButtons', false);
		}
	}
});
