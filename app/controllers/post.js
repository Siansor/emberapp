import Ember from 'ember';

export default Ember.Controller.extend({
  // actions:{
  //  sayHelo: function() {
  //    alert("Hello!")
  //  }
  // },

  title: 'First name',
  boby: 'Body',
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
