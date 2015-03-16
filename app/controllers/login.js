import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
	successMessage: 'Your account was created successfully.',
	authenticator: 'simple-auth-authenticator:jwt'
});