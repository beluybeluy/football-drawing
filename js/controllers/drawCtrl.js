app.controller('drawCtrl', ['DBService', function (DBService) {
   var vm = this;
   vm.calendar3Players = DBService.calendarFor3();
   vm.calendar2Players = DBService.calendarFor2();
   vm.calendar4Players = DBService.calendarFor4();
   vm.calendar5Players = DBService.calendarFor5();
   vm.calendar6Players = DBService.calendarFor6();
   vm.calendar7Players = DBService.calendarFor7();
   vm.calendar8Players = DBService.calendarFor8();
   vm.arrComb = [];
   vm.checkAmPl = true;
   vm.checkCalendar = false;
   vm.checkTabPl = false;
   vm.players = [];
   vm.combinationCopy = [];
   vm.combination = [];
   vm.x;
   //modal
   vm.modalShown = false;
   vm.toggleModal = function () {
      vm.modalShown = !vm.modalShown;
      vm.namePlayer = "";
   };
   //---
   vm.countTeams = [];
   for (var i = 2; i <= 20; i++) {
      vm.countTeams.push(i);
   }
   vm.amountPlayer = function () {
      //      if (vm.amountPlayers == 2) {
      //         vm.combination = vm.calendar2Players;
      //      }
      //      if (vm.amountPlayers == 3) {
      //         vm.combination = vm.calendar3Players;
      //      }
      //      if (vm.amountPlayers == 4) {
      //         vm.combination = vm.calendar4Players;
      //      }
      //      if (vm.amountPlayers == 5) {
      //         vm.combination = vm.calendar5Players;
      //      }
      //      if (vm.amountPlayers == 6) {
      //         vm.combination = vm.calendar6Players;
      //      }
      //      if (vm.amountPlayers == 7) {
      //         vm.combination = vm.calendar7Players;
      //      }
      //      if (vm.amountPlayers == 8) {
      //         vm.combination = vm.calendar8Players;
      //      }
      for (var i = 1; i <= vm.amountPlayers; i++) {
         for (var j = 1; j <= vm.amountPlayers; j++) {
            if (i != j) {
               vm.combinationCopy.push([i, j]);
            }
         }
      }
      var y = vm.combinationCopy.length;
      for (var i = 0; i < y; i++) {
         vm.createCombination();
      }
      console.log(vm.amountPlayers);
      //         for(var i = 0; i< arrComb.length)
      //      console.log(vm.combination);
      vm.checkAmPl = true;
   }
   vm.createCombination = function () {
         var x = DBService.randNum(0, vm.combinationCopy.length - 1);
         vm.combination.push(vm.combinationCopy[x]);
         vm.combinationCopy.splice(x, 1);
      }
      //      //створити гравця
      //   vm.random = function () {
      //      return 0.5 - Math.random();
      //   }
      //   console.log(vm.random() + "random");
   vm.createPlayer = function () {
      vm.teamsL = document.getElementsByClassName('draw__field_team').length;
      vm.x = DBService.randNum(0, vm.arrTeams.length - 1);
      vm.players.push({
         team: vm.getTeam(vm.arrTeams)
         , img: vm.arrTeams[vm.x].src
         , name: vm.namePlayer
            //         , name: prompt('Enter name')
            
         , scored: 0
         , against: 0
         , lose: 0
         , draw: 0
         , win: 0
         , points: 0
         , games: 0
      })
      if (vm.teamsL == vm.amountPlayers - 1) {
         vm.checkCalendar = true;
         vm.checkAmPl = false;
      }
      vm.checkTabPl = true;
      vm.arrTeams.splice(vm.x, 1);
   }
   vm.getTeam = function (arr) {
         console.log("number: " + vm.x);
         console.log("length: " + arr.length);
         return arr[vm.x].name;
      }
      //створює гру
   vm.games = [];
   vm.createCalendar = function () {
      for (var i = 0; i < vm.combination.length; i++) {
         var game = {
            team1: ""
            , team2: ""
            , img1: ""
            , img2: ""
            , goals2: 0
            , goals1: 0
            , games1: 0
            , games2: 0
         , }
         game.team1 = vm.players[vm.combination[i][0] - 1].team;
         game.team2 = vm.players[vm.combination[i][1] - 1].team;
         game.img1 = vm.players[vm.combination[i][0] - 1].img;
         game.img2 = vm.players[vm.combination[i][1] - 1].img;
         vm.games.push(game)
      }
      document.getElementById('table__calendar').style.display = "block";
      vm.checkCalendar = false;
   }
   vm.add = function (game) {
      for (var i = 0; i < vm.players.length; i++) {
         if (game.team1 == vm.players[i].team) {
            vm.players[i].scored += parseInt(game.goals1);
            vm.players[i].against += parseInt(game.goals2);
            vm.players[i].games += 1;
            if (game.goals1 > game.goals2) {
               vm.players[i].points += 3;
               vm.players[i].win += 1;
            }
            else if (game.goals1 == game.goals2) {
               vm.players[i].points += 1;
               vm.players[i].draw += 1;
            }
            else if (game.goals1 < game.goals2) {
               vm.players[i].lose += 1;
            }
         }
      }
      for (var i = 0; i < vm.players.length; i++) {
         if (game.team2 == vm.players[i].team) {
            vm.players[i].scored += parseInt(game.goals2);
            vm.players[i].against += parseInt(game.goals1);
            vm.players[i].games += 1;
            if (game.goals2 > game.goals1) {
               vm.players[i].points += 3;
               vm.players[i].win += 1;
            }
            else if (game.goals1 == game.goals2) {
               vm.players[i].points += 1;
               vm.players[i].draw += 1;
            }
            else if (game.goals2 < game.goals1) {
               vm.players[i].lose += 1;
            }
         }
      }
   }
}]);