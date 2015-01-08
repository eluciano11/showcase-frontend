import DS from 'ember-data';

export default DS.Model.extend({
	createdBy: DS.belongsTo('user'),
	createdAt: DS.attr('date'),
	name: DS.attr('string'),
	story: DS.attr('string'),
	screenshot: DS.attr('string')  
});
