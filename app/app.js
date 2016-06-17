import 'angular';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-ui-router';
import './ionic';
import './ionic-angular';

import angular from 'angular';
import AppRun from './AppRun';
import AppConfig from './AppConfig';
import AppCtrl from './AppCtrl';

import './modules/playlists/playlists';

angular.module('app', [

  // Third party
  'ionic',

  // Application modules
  'app.playlists'
])
.run(AppRun)
.config(AppConfig)
.controller('AppCtrl', AppCtrl);
