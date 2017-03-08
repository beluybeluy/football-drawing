app.directive('myTeams', ["DBService", function (DBService) {
   return {
      templateUrl: "js/directives/team.html"
      , scope: {
         teams: '='
      }
      , link: function (scope, el, attr) {
         scope.name = "teams";
         scope.clubs = DBService.allClubs();
         console.log(scope.clubs);
         scope.lvlFilt = "";
         scope.cntrFilt = "";
      }
   }
}])