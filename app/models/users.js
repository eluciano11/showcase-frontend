import DS from 'ember-data';

export default DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	email: DS.attr('string'),
	gravatarUrl: DS.attr('string'),
	createdAt: DS.attr('date'),
	university: DS.belongsTo('university'),
	department: DS.belongsTo('department'),
	isStaff: DS.attr('boolean'),
	isSuperuser: DS.attr('boolean'),
	isActive: DS.attr('boolean'),
	tokenVersion: DS.attr('string'),
	projects: DS.hasMany('projects'),
	fullName: function(){
		return this.get('firstName') + ' ' + this.get('lastName');
	}.property('firstName', 'lastName')
});
