import DS from 'ember-data';

export default DS.Model.extend({
  screenName: DS.attr(),
  avatar: DS.attr(),
  solution: DS.attr(),
  question: DS.attr()
});
