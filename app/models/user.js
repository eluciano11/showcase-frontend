import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  slug: DS.attr('string'),
  createdAt: DS.attr('date'),
  gravatarUrl: DS.attr('string'),
  isStaff: DS.attr('boolean'),
  isSuperuser: DS.attr('boolean'),
  isActive: DS.attr('boolean'),
  token: DS.attr('string'),

  fullName: function(){
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});
