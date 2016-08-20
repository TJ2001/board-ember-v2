import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer1() {
      var params = {
        screenName: this.get('screenName'),
        avatar: this.get('avatar'),
        solution: this.get('solution'),
      };
      this.set('addNewRental', false);
      this.sendAction('saveAnswer2', params);
    }
  }
});
