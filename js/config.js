//$routeProvider - відслідковує зміну url, в залежності від  url підключає різні сторінки в 
app.config(function ($routeProvider) {
   $routeProvider.when("/", {
         templateUrl: '../templates/main.html'
         , controller: 'mainCtrl'
         , controllerAs: 'main'
      }).when("/drawApp", {
         templateUrl: '../templates/draw.html'
      , controller: 'drawCtrl'
         , controllerAs: 'draw'
      })
      //.otherwiseспрацьовує в не існуючій url буде  кидати туда куда скажем
      .when("/teams_level", {
         templateUrl: '../templates/teams_level.html'
         , controller: 'teamsCtrl'
         , controllerAs: 'teams'
      }).otherwise({
         //        templateUrl: '../templates/main.html',
         //       controller: 'mainCtrl',
         //       controllerAs: 'main'
         redirectTo: '/'
      , }).when("/aboutDraw", {
         templateUrl: '../templates/about_draw.html'
      })
});