import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
	successfullyCreated: false,
	authenticator: 'simple-auth-authenticator:token',
	actions: {
		dismiss: function(){
			this.get('successfullyCreated',false);
		}
	}
});