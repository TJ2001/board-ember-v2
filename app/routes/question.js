import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

actions: {
    saveQuestion3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var city = params.city;
      city.get('rentals').addObject(newQuestion);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    }
  }
});
