app.controller('teamsCtrl',['DBService', function (DBService) {
   var vm = this;
   vm.name = "teams";
   vm.clubs = DBService.allClubs();
   vm.nationalTeams = DBService.national();
   vm.lvlFilt = " ";
  vm.cntrFilt = " ";
  
}])