import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('treepage');
  this.route('simplecomponent');
  this.route('simplecomponentwrapper');
  this.route('simpletree');
  this.route('treeincomponentwrapper');
});

export default Router;
