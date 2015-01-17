import Ember from 'ember';

export function transformDate(input) {
	return moment(input).format('LL');
}

export default Ember.Handlebars.makeBoundHelper(transformDate);
