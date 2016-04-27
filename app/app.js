import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularSanitize from 'angular-sanitize';
import angularUiRouter from 'angular-ui-router';
import ionic from './ionic';
import ionicAngular from './ionic-angular';

import AppRun from './AppRun';
import AppConfig from './AppConfig';
import AppCtrl from './AppCtrl';
import playlists from './modules/playlists/playlists';

'use strict';
angular.module('app', [

  // Third party
  'ionic',

  // Application modules
  'app.playlists'
])
.run(AppRun)
.config(AppConfig)
.controller('AppCtrl', AppCtrl);
