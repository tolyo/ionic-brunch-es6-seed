'use strict';

import angular from 'angular';
import PlaylistCtrl from './PlaylistCtrl';
import PlaylistsCtrl from './PlaylistsCtrl';

angular.module('app.playlists', [])
.controller('PlaylistCtrl', PlaylistCtrl)
.controller('PlaylistsCtrl', PlaylistsCtrl);
