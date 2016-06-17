import angular from 'angular';
import PlaylistCtrl from './PlaylistCtrl';
import PlaylistItemCtrl from './PlaylistItemCtrl';

angular.module('app.playlists', [
  'ui.router'
])
.config(['$stateProvider', $stateProvider => {
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
          templateUrl: 'modules/playlists/playlistItem.html',
          controller: 'PlaylistItemCtrl'
        }
      }
    });
}])
.controller('PlaylistCtrl', PlaylistCtrl)
.controller('PlaylistItemCtrl', PlaylistItemCtrl);
