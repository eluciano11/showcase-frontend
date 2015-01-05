import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('projects', function(){
		this.route('add');
		this.route('edit', {path: '/:project_slug/edit'});
	});
	this.resource('users', function(){
		this.route('login');
		this.route('logout');
		this.route('register');
	});
	this.route('search');
	this.route('loading');
});

export default Router;
