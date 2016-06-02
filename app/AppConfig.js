
const AppConfig = ($stateProvider, $urlRouterProvider) => {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'modules/layout/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'modules/layout/search.html'
        }
      }
    })

    .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'modules/layout/browse.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
};

AppConfig.$inject = [
  '$stateProvider',
  '$urlRouterProvider'
];

export default AppConfig;


