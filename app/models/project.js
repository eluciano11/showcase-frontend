import DS from 'ember-data';

export default DS.Model.extend({
  	createdAt: DS.attr('date'),
	createdBy: DS.belongsTo('user'),
	title: DS.attr('string'),
	slug: DS.attr('string'),
	summary: DS.attr('string'),
	screenshot: DS.attr('string'),
	story: DS.attr('string'),
	university: DS.belongsTo('university'),
	department: DS.belongsTo('department')
});
