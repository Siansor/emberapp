import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about',    {path: 'about'});
  this.route('services');
  this.route('contact',  {path: 'contact'});
  this.route('events');
  this.route('post');
  //
  // this.resource('posts', {path: '/posts'}, function(){
  //   this.route('new');
  //   this.route('post', {path:':post_id'});
  // });

  this.route('rentals');
});

export default Router;
