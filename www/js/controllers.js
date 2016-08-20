angular.module('starter.controllers', ['starter.factories'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    console.log('open');
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.id = $stateParams.playlistId - 1;
})

.controller('PersonalDetailsCtrl', function (PersonalDetails) {
  var vm = this;
  vm.personalDetails = PersonalDetails.getPersonalDetails();

  vm.closeModal = PersonalDetails.closeModal;
  vm.submitPersonalDetails = PersonalDetails.submitPersonalDetails;
})

.controller('CaloryCounterCtrl', function(VitaminFoodSelector, ScoopSelector, BMRCalculator) {

  var main = function () {
    // var vf = vitaminFood();
    // var sc = scoops();
    function enterPersonalDetails() {
      // common.setHiddenButton("firstTime", true)
      // personalInfo().presentForm;
      console.log("before Getfirsttime: " + common.getFirstTime());
      common.setFirstTime(false);
      console.log("after Getfirsttime: " + common.getFirstTime());
      console.log("before firstTIme hiddenbutton: "+ common.hiddenButton.firstTime);
      common.setHiddenButton("firstTime", true);
      console.log("after firstTIme hiddenbutton: "+ common.hiddenButton.firstTime);
      personalDetails().startForm();
    }

    function enterKcals() {
      common.setHiddenButton("enterKcals", true);
      common.setHiddenButton("vitaminFood", false);
    }

    return {
      enterKcals: enterKcals,
      enterPersonalDetails: enterPersonalDetails
    };
  };

  // var personalDetails = function () {
  //   function startForm() {
  //
  //   }
  // };
  // this.personalDetails;
  // vm = this;
  // // vm.personalDetails = BMRCalculator.getPersonalDetails();
  // vm.personalDetails = BMRCalculator.personalDetails;

  //viewModel
  var vmKcal = this;
  vmKcal.public = {
    enterPersonalDetails: main().enterPersonalDetails,
    enterKcals: main().enterKcals,
    getSmaken: VitaminFoodSelector.getSmaken,
    selectVitaminFood: VitaminFoodSelector.selectVitaminFood,
    selectNumberOfScoops: ScoopSelector.selectNumberOfScoops,
    // hiddenButton: common.getHiddenButton(),
    isHiddenButtonScoops: ScoopSelector.isHiddenButton,
    getHiddenButtonScoops: ScoopSelector.getHiddenButton,
    calculateBMR: BMRCalculator.calculateBMR,
    // submitPersonalDetails: BMRCalculator.submitPersonalDetails
  };
});

