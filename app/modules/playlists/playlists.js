'use strict';

import angular from 'angular';
import PlaylistCtrl from './PlaylistCtrl';
import PlaylistsCtrl from './PlaylistsCtrl';

angular.module('app.playlists', [])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'modules/playlists/playlists.html',
          controller: 'PlaylistCtrl'
        }
      }
    })
    .state('app.single', {
      url: '/playlists/:playlistId',
      views: {
        'menuContent': {
          templateUrl: 'modules/playlists/playlist.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
  }
])
.controller('PlaylistCtrl', PlaylistCtrl)
.controller('PlaylistsCtrl', PlaylistsCtrl);
