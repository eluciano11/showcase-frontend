import Ember from 'ember';

export default Ember.View.extend({
	needs: ['previewImages'],
	templateName: 'dropbox',
	src: '',
	noImageAdded: true,
	dragEnter: function(event){
		event.preventDefault();
		document.getElementById('dropzone').className = "dropzone dragover";
	},
	dragOver: function(event){
		event.preventDefault();
		console.log(document.getElementById('dropzone'));
		document.getElementById('dropzone').className = 'dropzone dragover';
	},
	drop: function(event) {
	 	event.preventDefault();
	 	var files = event.dataTransfer.files;
	 	var controller = this.get('controller').controllerFor('projects/add');
	 	if(files.length === 1){
	 		var fileUploaded;
	 		for (var i = 0; i >= 0; i--) {
				fileUploaded = files[i];
			}
			controller.set('file', fileUploaded);

			var render = new FileReader();
			var self = this;
			render.readAsDataURL(fileUploaded);
			render.onload = function(imgsrc){
				self.set('src', imgsrc.target.result);
				document.getElementById('imagePreview').className = "";
				document.getElementById('dropzone').className = "no-display";
			};
	 	}
	 	else{
	 		console.log('motherfucker!');
	 		console.log(files);
	 	}
	},
	actions:{
		cancel: function() {
			this.set('src', '');
			document.getElementById('imagePreview').className = "no-display";
			document.getElementById('dropzone').className = "dropzone";
		},
		save: function() {
			this.set('noImageAdded', false);
		}
	}
});
