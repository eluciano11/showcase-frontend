import DS from 'ember-data';

export default DS.Model.extend({
  	createdAt: DS.attr('date'),
	createdBy: DS.attr(),
	name: DS.attr('string'),
	screenshot: DS.attr('string'),
	story: DS.attr('string')
});
