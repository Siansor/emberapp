import Ember from 'ember';

export default Ember.Controller.extend({
  // actions:{
  //  sayHelo: function() {
  //    alert("Hello!")
  //  }
  // },

  title: 'New post',
  boby: 'New Body',
  authors: ['Sasha', 'Rob'],
  comments: [
    {
      name: 'Sasha',
      title: 'Ember'
    },
    {
      name: 'Ig',
      title: 'React'
    }
  ]

});
