import Ember from 'ember';

var answers = [{
  id: 1,
  "avatar" : "http://yoursmiles.org/ismile/anime/minami-ke7.png",
  "solution" : "Start off with a healthy breakfest every morning.",
  "question" : "What steps should I make if I want to develop my brain to the maximum?",
  "screenName" : "minami-ke7"
}, {
  id: 2,
  "avatar" : "http://img00.deviantart.net/e0d8/i/2011/241/f/6/my_computer_anime_icon_by_hikanepb-d3j5a2v.png",
  "solution" : "Workout everyday",
  "question" : "What steps should I make if I want to develop my brain to the maximum?",
  "screenName" : "diva266"
}, {
  id: 3,
  "avatar" : "http://images5.fanpop.com/image/answers/2782000/2782480_1339363618823.93res_212_237.jpg",
  "solution" : "get proper sleep everyday",
  "question" : "What steps should I make if I want to develop my brain to the maximum?",
  "screenName" : "fma247"
}];

export default Ember.Route.extend({
  model() {
    return answers;
  },
});
