import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	emblem: DS.attr('string'),
	town: DS.attr('string')  
});
