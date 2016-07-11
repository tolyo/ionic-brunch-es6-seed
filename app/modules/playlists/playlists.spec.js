beforeEach(module('app.playlists'));

describe('playlists module', () => {

  describe('PlaylistCtrl', () => {

    it('should make lists available to the scope',
      inject(($controller, $rootScope) => {
        let scope = $rootScope.$new();
        const ctrl = $controller('PlaylistCtrl', {
          $scope: scope
        });
        expect(ctrl).toBeDefined();
        expect(scope.playlists).toBeTruthy();
        expect(scope.playlists.length).toBe(6);
      })
    );
  });
});
