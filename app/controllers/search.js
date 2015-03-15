import Ember from 'ember';
import ENV from '../../../config/environment';

export default Ember.Controller.extend({
	search_term: '',
	actions: {
		search: function(){
			var self = this;

			Ember.$.ajax({
				url: ENV.APP.backendHost + ENV.APP.backendNamespace + 'search?q=' + this.get('search_term'),
				type: 'GET'
			}).then(function(data){
				if (data.users){
					self.set('users', data.users);
				}
				else{
					self.set('users', '');
				}

				if (data.projects){
					self.set('projects', data.projects);
				}
				else{
					self.set('projects', '');
				}

				if (data.universities){
					self.set('universities', data.universities);
				}
				else{
					self.set('universities', '');
				}
			});
		}
	}
});
