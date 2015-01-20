import DS from 'ember-data';

export default DS.Model.extend({
  	createdAt: DS.attr('date'),
	createdBy: DS.attr('number'),
	title: DS.attr('string'),
	slug: DS.attr('string'),
	summary: DS.attr('string'),
	screenshot: DS.attr('string'),
	story: DS.attr('string'),
	university: DS.attr('number'),
	department: DS.attr('number')
});
