'use strict';

beforeEach(module('app.playlists'));

describe('playlists module', function() {

  describe('PlaylistCtrl', function() {

    it('should make lists available to the scope',
      inject(function($controller, $rootScope, $state) {
        var scope;
        scope = $rootScope.$new();
        var ctrl = $controller('PlaylistCtrl', {
          $scope: scope
        });
        expect(ctrl).toBeDefined();
        expect(scope.playlists).toBeTruthy();
        expect(scope.playlists.length).toBe(6);
      })
    );
  });
});
