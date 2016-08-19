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

.controller('CaloryCounterCtrl', function($scope, $ionicModal, $timeout, KcalCounter, VitaminFoodSelector, ScoopSelector) {

  // Form data for the login modal
  $scope.personalDetails = {
    sex: true,
    age: 25,
    weight: 80,
    length: 175,
    activitylevel: 2
  };

  var calculateBMR = function () {
    var sexFactorMale = 10;
    var sexFactorFemale = 7;
    var sexFactor, BMR;
    if(sex === "male"){
      sexFactor = sexFactorMale;
    }
    else {
      sexFactor = sexFactorFemale;
    }
    BMR = (sexFactor * $scope.personalDetails.weight)+(1*$scope.personalDetails.length)
  };

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/personalDetails.html', {
  // $ionicModal.fromTemplateUrl('templates/vitaminFoodSelector.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    console.log('open');
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.submitPersonalDetails = function() {
    console.log('Submitting personal details: ', $scope.personalDetails);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeModal();
    }, 1000);
  };

  //common use object literal //public properties within the scope of this controller and their public getters/setters
  var common = {
    vitaminFoodSelectedIndex: 0,
    scoopsSelected: 3,
    kcalLeftForTheDay: 2500,
    kcalUndoStore: 0,
    firstTime: true,
    hiddenButton: {
      // firstTime: !common.getFirstTime(),
      // firstTime: !common.firstTime,
      firstTime: false,
      enterKcals: false,
      vitaminFood: true,
      scoops: true
    },
    getFirstTime: function () {
      return this.firstTime;
    },
    setFirstTime: function (bool) {
      this.firstTime = bool;
    },
    setVitaminFoodSelectedIndex: function (index) {
      this.vitaminFoodSelectedIndex = index;
    },
    getVitaminFoodSelectedIndex: function () {
      return this.vitaminFoodSelectedIndex;
    },
    setScoopsSelected: function (index) {
      this.scoopsSelected = index + 1;
    },
    getScoopsSelected: function () {
      return this.scoopsSelected;
    },
    getKcalLeftForTheDay: function () {
      return this.kcalLeftForTheDay;
    },
    setKcalLeftForTheDay: function (kcals) {
      this.kcalLeftForTheDay = kcals;
    },
    setHiddenButton: function (hiddenButtonPropertyString, isHidden) {
      if (hiddenButtonPropertyString === "enterKcals"){
        this.hiddenButton.enterKcals = isHidden;
      }
      else if(hiddenButtonPropertyString === "vitaminFood"){
       this.hiddenButton.vitaminFood = isHidden;
      }
      else if (hiddenButtonPropertyString === "scoops"){
        this.hiddenButton.scoops = isHidden;
      }
      else if (hiddenButtonPropertyString === "firstTime"){
        this.hiddenButton.firstTime = isHidden;
      }
    },
    getHiddenButton: function () {
      return this.hiddenButton;
    }
  };

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

  var personalDetails = function () {
    function startForm() {

    }
  };

  //function returning objects
//   var vitaminFood = function () {
//     var privateObject = {
//       smaken: [
//         {title: 'Vanilla', kcalPerScoop: 100},
//         {title: 'Chocolat', kcalPerScoop: 200},
//         {title: 'Strawberry', kcalPerScoop: 300},
//         {title: 'Apple', kcalPerScoop: 50},
//         {title: 'Chicken', kcalPerScoop: 400}
//       ],
//       selectVitaminFood: function () {
//         var hideSheet = $ionicActionSheet.show({
//           buttons: privateObject.populateButtonsWithSmaken(),
//           titleText: 'Choose your VitaminFood',
//           cancelText: 'Return to previous screen',
//           cancel: function () {
//           },
//           buttonClicked: function (index) {
//             common.setVitaminFoodSelectedIndex(index);
//             console.log(privateObject.getSelectedSmaak() + " " + privateObject.getSelectedKcalPerScoop());
//             common.setHiddenButton("vitaminFood", true);
//             common.setHiddenButton("scoops", false);
//             console.log(KcalCounter.testFactory);
//             console.log(VitaminFoodSelector.testFactory);
//             return true;
//           }
//         });
//       },
//       populateButtonsWithSmaken: function () {
//         var buttonsArray = [];
//         var populateButtonsArray = function (element, index, array) {
//           buttonsArray.push({text: element.title});
//         };
//         this.smaken.forEach(populateButtonsArray);
//         return buttonsArray;
//       },
//       getSelectedSmaak: function () {
//         console.log(common.getVitaminFoodSelectedIndex());
//         return this.smaken[common.getVitaminFoodSelectedIndex()].title;
//       },
//       getSelectedKcalPerScoop: function () {
//         return privateObject.smaken[common.getVitaminFoodSelectedIndex()].kcalPerScoop;
//       },
//       getSmaken: function () {
//         return privateObject.smaken;
//       }
//     };
//
//     return {
//       getSmaken: privateObject.getSmaken,
//       selectVitaminFood: privateObject.selectVitaminFood, //called from exporter
//       getSelectedKcalPerScoop: privateObject.getSelectedKcalPerScoop //called from scoop
//     };
//   }
//
//   var scoops = function () {
//     var privateObject = {
//       maxNumberOfScoops: 10,
//       selectNumberOfScoops: function () {
//         var hideSheet = $ionicActionSheet.show({
//           buttons: privateObject.populateButtonsWithScoops(),
//           titleText: 'Choose the Number of Scoops you had',
//           cancelText: 'Return to previous screen',
//           cancel: function () {
//           },
//           buttonClicked: function (index) {
//             common.setScoopsSelected(index);
//             console.log(common.getScoopsSelected() + " scoop(s)");
//             kcalCalculator().calculateKcalsLeft();
//             common.setHiddenButton("scoops", true);
//             common.setHiddenButton("enterKcals", false);
//             return true;
//           }
//         });
//       },
//       populateButtonsWithScoops: function () {
//         var buttonsArray = [];
//         var maxScoops = this.getMaxNumberOfScoops();
//         for (var i = 1; i <= maxScoops; i++) {
//           var buttonText;
//           if (i == 1) {
//             buttonText = i + " scoop";
//           }
//           else {
//             buttonText = i + " scoops";
//           }
//           buttonsArray.push({text: buttonText});
//         }
//         return buttonsArray;
//       },
//       getMaxNumberOfScoops: function () {
//         return this.maxNumberOfScoops;
//       }
//     };
//     return {
//       selectNumberOfScoops: privateObject.selectNumberOfScoops // called from exporter
//     };
// };

  // var kcalCalculator = function () {
  //   var privateObject = {
  //     calculateKcalsLeft: function () {
  //       console.log(common.getKcalLeftForTheDay());
  //       console.log("vitaminFood().getSelectedKcalPerScoop(): " + vitaminFood().getSelectedKcalPerScoop());
  //       var calculatedKcals = common.getKcalLeftForTheDay() - vitaminFood().getSelectedKcalPerScoop() * common.getScoopsSelected();
  //       common.setKcalLeftForTheDay(calculatedKcals);
  //       console.log("common.getKcalLeftForTheDay(): " + common.getKcalLeftForTheDay());
  //     }
  //   };
  //   return {
  //     calculateKcalsLeft: privateObject.calculateKcalsLeft
  //   };
  // };
  // var testFunctions = (function () {
  //   var abc = "success";
  //
  //   var privateObj = {
  //     publicFunctionX: function () {
  //         console.log("public facing interface:1 " + abc)
  //     },
  //     privateFunctionX: function () {
  //         console.log("private: " + abc)
  //     }
  //   };
  //   // var publicFunction = function () {
  //   //   console.log("public facing interface: " + abc)
  //   // };
  //   //
  //   // function privateFunction() {
  //   //   console.log("private: " + abc)
  //   // }
  //   var _this = {
  //     publicFunction: function(){
  //       console.log("pub: " + abc)
  //     }
  //   };
  //     return _this;
  //
  // })();

  //viewModel
  var vmKcal = this;
  vmKcal.public = {
    enterPersonalDetails: main().enterPersonalDetails,
    enterKcals: main().enterKcals,
    getSmaken: VitaminFoodSelector.getSmaken,
    selectVitaminFood: VitaminFoodSelector.selectVitaminFood,
    selectNumberOfScoops: ScoopSelector.selectNumberOfScoops,
    hiddenButton: common.getHiddenButton(),
    isHiddenButtonScoops: ScoopSelector.isHiddenButton,
    getHiddenButtonScoops: ScoopSelector.getHiddenButton
  };
});

// //---------------------------------------------------------------------------- 1
//                                        Everything declared on the $scope
// // Properties
// $scope.kcalLeftForTheDay = 2500;
// $scope.kcalUndoStore = 0;
// $scope.maxNumberOfScoops = 10;
// $scope.smaken = [
//   {title: 'Vanilla', kcalPerScoop: 100 },
//   {title: 'Chocolat', kcalPerScoop: 200 },
//   {title: 'Strawberry', kcalPerScoop: 300 },
//   {title: 'Apple', kcalPerScoop: 50 },
//   {title: 'Chicken', kcalPerScoop: 400 }
// ];
// $scope.scoopsSelected;
// $scope.vitaminFoodSelectedIndex;
// $scope.visibility = {
//   showVitaminFoodButton: false,
//   showScoopsButton: true
// };
//
// // Getters & Setters
// $scope.setVitaminFoodSelectedIndex = function (index){
//   $scope.vitaminFoodSelectedIndex = index;
// };
//
// $scope.getSelectedSmaak = function () {
//   return $scope.smaken[$scope.vitaminFoodSelectedIndex].title;
// };
//
// $scope.getSelectedKcalPerScoop = function () {
//   return $scope.smaken[$scope.vitaminFoodSelectedIndex].kcalPerScoop;
// };
//
// $scope.setScoopsSelected = function (index){
//   $scope.scoopsSelected = index + 1;
// };
//
// $scope.getScoopsSelected = function () {
//   return $scope.scoopsSelected;
// }
//
// $scope.getKcalLeftForTheDay = function () {
//   return $scope.kcalLeftForTheDay;
// }
//
// $scope.setKcalLeftForTheDay = function (kcals) {
//   $scope.kcalLeftForTheDay = kcals;
// }
// // Methods
//
// $scope.selectVitaminFood = function () {
//   var hideSheet = $ionicActionSheet.show({
//     buttons: $scope.populateButtonsWithSmaken($scope.smaken),
//     // destructiveText : 'Delete',
//     titleText: 'Choose your VitaminFood',
//     cancelText: 'Return to previous screen',
//     cancel: function () {
//       //do something here or not
//     },
//     buttonClicked: function (index) {
//       $scope.setVitaminFoodSelectedIndex(index);
//       console.log($scope.getSelectedSmaak() + " " + $scope.getSelectedKcalPerScoop());
//       // var kcalCounter = new KcalCounter;
//       console.log(KcalCounter.testFactory);
//       $scope.visibility.showVitaminFoodButton = true;
//       $scope.visibility.showScoopsButton = false;
//       return true;
//     }
//   });
// };
//
// $scope.populateButtonsWithSmaken = function (smaken) {
//   var buttonsArray = [];
//   function populateButtonsArray(element, index, array) {
//     buttonsArray.push({text: element.title});
//   }
//   smaken.forEach(populateButtonsArray);
//   return buttonsArray;
// }
//
// $scope.selectNumberOfScoops = function () {
//   var hideSheet = $ionicActionSheet.show({
//     buttons: $scope.populateButtonsWithScoops(),
//     // destructiveText : 'Delete',
//     titleText: 'Choose the Number of Scoops you had',
//     cancelText: 'Return to previous screen',
//     cancel: function () {
//       //do something here or not
//     },
//     buttonClicked: function (index) {
//       $scope.setScoopsSelected(index);
//       console.log($scope.getScoopsSelected() + " scoop(s)");
//       $scope.calculateKcalsLeft();
//       $scope.visibility.showScoopsButton = true;
//       return true;
//     }
//   });
//   console.log('selected');
//
// };
//
// $scope.populateButtonsWithScoops = function () {
//   var buttonsArray = [];
//   for(var i = 1; i <=  $scope.maxNumberOfScoops; i++){
//     var buttonText;
//     if(i == 1){
//       buttonText = i + " scoop";
//     }
//     else {
//       buttonText = i + " scoops";
//     }
//     buttonsArray.push({text: buttonText});
//   }
//   return buttonsArray;
// };
//
// $scope.calculateKcalsLeft = function () {
//   var calculatedKcals = $scope.getKcalLeftForTheDay() - $scope.getSelectedKcalPerScoop()*$scope.getScoopsSelected();
//   $scope.setKcalLeftForTheDay(calculatedKcals);
//   // $scope.kcalLeftForTheDay -= $scope.getSelectedKcalPerScoop()*$scope.getScoopsSelected();
//   console.log($scope.kcalLeftForTheDay);
//   console.log("day = " + timeNow)
// }







// -------------------------------------------------------------------- 2
//                                    public facing interface through viewmodel, the rest declared as globals within the controller
//
//
// // Properties
// var kcalLeftForTheDay, kcalUndoStore, maxNumberOfScoops, smaken, scoopsSelected, vitaminFoodSelectedIndex, visibility;
// kcalLeftForTheDay = 2500;
// kcalUndoStore = 0;
// maxNumberOfScoops = 10;
// smaken = [
//   {title: 'Vanilla', kcalPerScoop: 100 },
//   {title: 'Chocolat', kcalPerScoop: 200 },
//   {title: 'Strawberry', kcalPerScoop: 300 },
//   {title: 'Apple', kcalPerScoop: 50 },
//   {title: 'Chicken', kcalPerScoop: 400 }
// ];
// scoopsSelected;
// vitaminFoodSelectedIndex;
// visibility = {
//   showVitaminFoodButton: false,
//   showScoopsButton: true
// };
//
// //object literals
// var vitaminFood = {
//
// };
//
// var scoops = {
//
// };
//
// var kcals = {
//
// };
//
// //viewModel
// var vmKcal = this;
// vmKcal.public = {
//   visibility: visibility,
//   selectVitaminFood: selectVitaminFood,
//   selectNumberOfScoops: selectNumberOfScoops,
// };
//
// // Getters & Setters
// function setVitaminFoodSelectedIndex(index){
//   vitaminFoodSelectedIndex = index;
// }
//
// function getSelectedSmaak() {
//   return smaken[vitaminFoodSelectedIndex].title;
// }
//
// function getSelectedKcalPerScoop() {
//   return smaken[vitaminFoodSelectedIndex].kcalPerScoop;
// }
//
// function setScoopsSelected(index){
//   scoopsSelected = index + 1;
// }
//
// function getScoopsSelected() {
//   return scoopsSelected;
// }
//
// function getKcalLeftForTheDay () {
//   return kcalLeftForTheDay;
// }
//
// function setKcalLeftForTheDay (kcals) {
//   kcalLeftForTheDay = kcals;
// }
//
// // Methods
// function selectVitaminFood () {
//   var hideSheet = $ionicActionSheet.show({
//     buttons: populateButtonsWithSmaken(smaken),
//     // destructiveText : 'Delete',
//     titleText: 'Choose your VitaminFood',
//     cancelText: 'Return to previous screen',
//     cancel: function () {
//       //do something here or not
//     },
//     buttonClicked: function (index) {
//       setVitaminFoodSelectedIndex(index);
//       console.log(getSelectedSmaak() + " " + getSelectedKcalPerScoop());
//       // var kcalCounter = new KcalCounter;
//       console.log(KcalCounter.testFactory);
//       visibility.showVitaminFoodButton = true;
//       visibility.showScoopsButton = false;
//       return true;
//     }
//   });
// }
//
// function populateButtonsWithSmaken (smaken) {
//   var buttonsArray = [];
//   function populateButtonsArray(element, index, array) {
//     buttonsArray.push({text: element.title});
//   }
//   smaken.forEach(populateButtonsArray);
//   return buttonsArray;
// }
//
// function selectNumberOfScoops () {
//   var hideSheet = $ionicActionSheet.show({
//     buttons: populateButtonsWithScoops(),
//     // destructiveText : 'Delete',
//     titleText: 'Choose the Number of Scoops you had',
//     cancelText: 'Return to previous screen',
//     cancel: function () {
//       //do something here or not
//     },
//     buttonClicked: function (index) {
//       setScoopsSelected(index);
//       console.log(getScoopsSelected() + " scoop(s)");
//       calculateKcalsLeft();
//       visibility.showScoopsButton = true;
//       return true;
//     }
//   });
//   console.log('selected');
//
// }
//
// function populateButtonsWithScoops () {
//   var buttonsArray = [];
//   for(var i = 1; i <= maxNumberOfScoops; i++){
//     var buttonText;
//     if(i == 1){
//       buttonText = i + " scoop";
//     }
//     else {
//       buttonText = i + " scoops";
//     }
//     buttonsArray.push({text: buttonText});
//   }
//   return buttonsArray;
// };
//
// function calculateKcalsLeft () {
//   var calculatedKcals = getKcalLeftForTheDay() - getSelectedKcalPerScoop() * getScoopsSelected();
//   setKcalLeftForTheDay(calculatedKcals);
//   console.log(kcalLeftForTheDay);
//   // console.log("day = " + timeNow)
// }







// -------------------------------------------------------------------- 3
//                                  Everything organized in 3 object literals and its public interface of controller through the viewmodel
//                                  could be improved by refactoring hiddenButton methods + properties
// //object literals
// var vitaminFood = {
//   button: {
//     hidden: false
//   },
//   hiddenButton: false,
//   setHiddenButton: function (isHidden) {
//     this.button.hidden = isHidden;
//   },
//   getButton: function () {
//     return this.button;
//   },
//   smaken : [
//     {title: 'Vanilla', kcalPerScoop: 100 },
//     {title: 'Chocolat', kcalPerScoop: 200 },
//     {title: 'Strawberry', kcalPerScoop: 300 },
//     {title: 'Apple', kcalPerScoop: 50 },
//     {title: 'Chicken', kcalPerScoop: 400 }
//   ],
//   vitaminFoodSelectedIndex: -1,
//   setVitaminFoodSelectedIndex: function (index){
//     vitaminFoodSelectedIndex = index;
//   },
//   getSelectedSmaak: function () {
//     return this.smaken[vitaminFoodSelectedIndex].title;
//   },
//   getSelectedKcalPerScoop: function () {
//     return this.smaken[vitaminFoodSelectedIndex].kcalPerScoop;
//   },
//   selectVitaminFood: function () {
//     var hideSheet = $ionicActionSheet.show({
//       buttons: vitaminFood.populateButtonsWithSmaken(this.smaken),
//       titleText: 'Choose your VitaminFood',
//       cancelText: 'Return to previous screen',
//       cancel: function () {
//       },
//       buttonClicked: function (index) {
//         vitaminFood.setVitaminFoodSelectedIndex(index);
//         console.log(vitaminFood.getSelectedSmaak() + " " + vitaminFood.getSelectedKcalPerScoop());
//         console.log(KcalCounter.testFactory);
//         vitaminFood.setHiddenButton(true);
//         scoops.setHiddenButton(false);
//         // console.log("hiddenButtonVitaminFood1 vf.button.hidden: " + vitaminFood.button.hidden + " scoops.button.hidden: " + scoops.button.hidden);
//         // console.log("hiddenButtonVitaminFood2 vf.getButton: " + vitaminFood.getButton() + "  scoops.getButton: " + scoops.getButton() );
//         // console.log("hiddenButtonVitaminFood3 vf.getButton.hidden: " + vitaminFood.getButton().hidden + "  scoops.getButton.hidden: " + scoops.getButton().hidden );
//         // console.log("hiddenButtonVitaminFood4 vmKcal.public.hiddenButton*: " + vmKcal.public.hiddenButtonVitaminFood + "  hiddenButtonScoops: " + vmKcal.public.hiddenButtonScoops );
//         return true;
//       }
//     });
//   },
//   populateButtonsWithSmaken: function (smaken) {
//     var buttonsArray = [];
//     var populateButtonsArray = function (element, index, array) {
//       buttonsArray.push({text: element.title});
//     };
//     this.smaken.forEach(populateButtonsArray);
//     return buttonsArray;
//   }
// }
//
// var scoops = {
//   button: {
//     hidden: true
//   },
//   maxNumberOfScoops: 10,
//   scoopsSelected: 0,
//   setHiddenButton: function (isHidden) {
//     this.button.hidden = isHidden;
//   },
//   getButton: function () {
//     return this.button;
//   },
//   setScoopsSelected: function (index){
//     scoopsSelected = index + 1;
//   },
//   getScoopsSelected: function () {
//     return scoopsSelected;
//   },
//   getMaxNumberOfScoops: function () {
//     return this.maxNumberOfScoops;
//   },
//   selectNumberOfScoops: function () {
//     var hideSheet = $ionicActionSheet.show({
//       buttons: scoops.populateButtonsWithScoops(),
//       titleText: 'Choose the Number of Scoops you had',
//       cancelText: 'Return to previous screen',
//       cancel: function () {
//       },
//       buttonClicked: function (index) {
//         scoops.setScoopsSelected(index);
//         console.log(scoops.getScoopsSelected() + " scoop(s)");
//         kcalCalculator.calculateKcalsLeft();
//         scoops.setHiddenButton(true);
//         return true;
//       }
//     });
//     console.log('selected');
//   },
//   populateButtonsWithScoops: function () {
//     var buttonsArray = [];
//     var maxScoops = this.getMaxNumberOfScoops();
//     for(var i = 1; i <= maxScoops; i++){
//       var buttonText;
//       if(i == 1){
//         buttonText = i + " scoop";
//       }
//       else {
//         buttonText = i + " scoops";
//       }
//       buttonsArray.push({text: buttonText});
//     }
//     return buttonsArray;
//   }
// };
//
// var kcalCalculator = {
//   kcalLeftForTheDay: 2500,
//   kcalUndoStore: 0,
//   getKcalLeftForTheDay: function () {
//     return this.kcalLeftForTheDay;
//   },
//   setKcalLeftForTheDay : function (kcals) {
//     this.kcalLeftForTheDay = kcals;
//   },
//   calculateKcalsLeft: function () {
//     var calculatedKcals = this.getKcalLeftForTheDay() - vitaminFood.getSelectedKcalPerScoop() * scoops.getScoopsSelected();
//     this.setKcalLeftForTheDay(calculatedKcals);
//     console.log(this.getKcalLeftForTheDay());
//   }
// };
//
// //viewModel
// var vmKcal = this;
// vmKcal.public = {
//   selectVitaminFood: vitaminFood.selectVitaminFood,
//   selectNumberOfScoops: scoops.selectNumberOfScoops,
//   hiddenButtonVitaminFood: vitaminFood.getButton(),
//   hiddenButtonScoops: scoops.getButton()
// };




// -------------------------------------------------------------------- 4 temp not working

//
// //common use object literal
// var common = {
//   vitaminFoodSelectedIndex: 0,
//   scoopsSelected: 3,
//   kcalLeftForTheDay: 2500,
//   kcalUndoStore: 0,
//   hiddenButton: {
//     vitaminFood: false,
//     scoops: true
//   },
//   setVitaminFoodSelectedIndex: function (index) {
//     this.vitaminFoodSelectedIndex = index;
//   },
//   getVitaminFoodSelectedIndex: function () {
//     return this.vitaminFoodSelectedIndex;
//   },
//   setScoopsSelected: function (index) {
//     this.scoopsSelected = index + 1;
//   },
//   getScoopsSelected: function () {
//     return this.scoopsSelected;
//   },
//   getKcalLeftForTheDay: function () {
//     return this.kcalLeftForTheDay;
//   },
//   setKcalLeftForTheDay: function (kcals) {
//     this.kcalLeftForTheDay = kcals;
//   },
//   setHiddenButton: function (objectProperty, isHidden) {
//     // var objProp = objectProperty;
//     this.hiddenButton.vitaminFood = isHidden;
//     // console.log("objectProperty: " + objectProperty + "isHidden: " + isHidden)
//   },
//   // setVFhiddenButton: function (bool) {
//   //   console.log("bool: " + bool);
//   //   console.log("prio this.hiddenButton.vitaminFood: " + this.hiddenButton.vitaminFood);
//   //   this.hiddenButton.vitaminFood = bool;
//   //   console.log("ante this.hiddenButton.vitaminFood: " + this.hiddenButton.vitaminFood);
//   // },
//   // ifVFhiddenButton: function () {
//   //   return
//   // },
//   getHiddenButton: function () {
//     return this.hiddenButton;
//   },
// };
//
// //function returning objects
// var vitaminFood = function () {
//   var privateObject = {
//     smaken: [
//       {title: 'Vanilla', kcalPerScoop: 100},
//       {title: 'Chocolat', kcalPerScoop: 200},
//       {title: 'Strawberry', kcalPerScoop: 300},
//       {title: 'Apple', kcalPerScoop: 50},
//       {title: 'Chicken', kcalPerScoop: 400}
//     ],
//     // button: {
//     //   hidden: false
//     // },
//     // hiddenButton: false,
//     // setHiddenButton: function (isHidden) {
//     //   this.button.hidden = isHidden;
//     // },
//     // getButton: function () {
//     //   return this.button;
//     // },
//     // vitaminFoodSelectedIndex: 0,
//
//     selectVitaminFood: function () {
//       var hideSheet = $ionicActionSheet.show({
//         buttons: privateObject.populateButtonsWithSmaken(),
//         titleText: 'Choose your VitaminFood',
//         cancelText: 'Return to previous screen',
//         cancel: function () {
//         },
//         buttonClicked: function (index) {
//           common.setVitaminFoodSelectedIndex(index);
//           console.log(privateObject.getSelectedSmaak() + " " + privateObject.getSelectedKcalPerScoop());
//           // common.setHiddenButton(common.hiddenButton.vitaminFood, true);
//           // common.setHiddenButton(common.hiddenButton.scoops, false);
//           common.setVFhiddenButton(true);
//           // console.log(KcalCounter.testFactory);
//           // console.log("in selectVitaminFood fn, common.setHiddenButton -->");
//           // console.log("prior common.setHiddenButton(common.hiddenButton.vitaminFood, true)");
//           // console.log("common.hiddenButton.vitaminFood: " + common.hiddenButton.vitaminFood);
//           // console.log("common.hiddenButton.scoops: " + common.hiddenButton.scoops);
//
//           // console.log("after: ");
//           // console.log("common.hiddenButton.vitaminFood: " + common.hiddenButton.vitaminFood + " common.hiddenButton.scoops: " + common.hiddenButton.scoops);
//           // console.log("common.getHiddenButton(): " + common.getHiddenButton() + "  common.getHiddenButton().vitaminFood: " + common.getHiddenButton().vitaminFood + " common.getHiddenButton().scoops: " + common.getHiddenButton().scoops);
//           // console.log("hiddenButtonVitaminFood3 vf.getButton.hidden: " + vitaminFood.getButton().hidden + "  scoops.getButton.hidden: " + scoops.getButton().hidden );
//           // console.log("hiddenButtonVitaminFood4 vmKcal.public.hiddenButton*: " + vmKcal.public.hiddenButtonVitaminFood + "  hiddenButtonScoops: " + vmKcal.public.hiddenButtonScoops );
//           return true;
//         }
//       });
//     },
//     populateButtonsWithSmaken: function () {
//       var buttonsArray = [];
//       var populateButtonsArray = function (element, index, array) {
//         buttonsArray.push({text: element.title});
//       };
//       this.smaken.forEach(populateButtonsArray);
//       return buttonsArray;
//     },
//     // setVitaminFoodSelectedIndex: function (index) {
//     //   // this.vitaminFoodSelectedIndex = index;
//     //   common.vitaminFoodSelectedIndex = index;
//     // },
//     getSelectedSmaak: function () {
//       console.log(common.getVitaminFoodSelectedIndex());
//       return this.smaken[common.getVitaminFoodSelectedIndex()].title;
//     },
//     getSelectedKcalPerScoop: function () {
//       return privateObject.smaken[common.getVitaminFoodSelectedIndex()].kcalPerScoop;
//     }
//   };
//
//   return {
//     selectVitaminFood: privateObject.selectVitaminFood, //called from exporter
//     // getButton: privateObject.getButton, //called from exporter
//     getSelectedKcalPerScoop: privateObject.getSelectedKcalPerScoop //called from scoop
//   };
// }
//
// var scoops = function () {
//   var privateObject = {
//     maxNumberOfScoops: 10,
//     // scoopsSelected: 3,
//     // button: {
//     //   hidden: true
//     // },
//     // setHiddenButton: function (isHidden) {
//     //   privateObject.button.hidden = isHidden;
//     // },
//     // getButton: function () {
//     //   return this.button;
//     // },
//
//     selectNumberOfScoops: function () {
//       var hideSheet = $ionicActionSheet.show({
//         buttons: privateObject.populateButtonsWithScoops(),
//         titleText: 'Choose the Number of Scoops you had',
//         cancelText: 'Return to previous screen',
//         cancel: function () {
//         },
//         buttonClicked: function (index) {
//           common.setScoopsSelected(index);
//           console.log(common.getScoopsSelected() + " scoop(s)");
//           kcalCalculator().calculateKcalsLeft();
//           common.setHiddenButton(common.hiddenButton.scoops, true);
//           return true;
//         }
//       });
//       // console.log('selected');
//     },
//     populateButtonsWithScoops: function () {
//       var buttonsArray = [];
//       var maxScoops = this.getMaxNumberOfScoops();
//       for (var i = 1; i <= maxScoops; i++) {
//         var buttonText;
//         if (i == 1) {
//           buttonText = i + " scoop";
//         }
//         else {
//           buttonText = i + " scoops";
//         }
//         buttonsArray.push({text: buttonText});
//       }
//       return buttonsArray;
//     },
//     // setScoopsSelected: function (index) {
//     //   common.scoopsSelected = index + 1;
//     // },
//     // getScoopsSelected: function () {
//     //   return common.scoopsSelected;
//     // },
//     getMaxNumberOfScoops: function () {
//       return this.maxNumberOfScoops;
//     }
//   };
//   return {
//     selectNumberOfScoops: privateObject.selectNumberOfScoops, // called from exporter
//     // getButton: privateObject.getButton,                       // called from exporter
//     // setHiddenButton: privateObject.setHiddenButton,           // called from vitaminFood
//     // getScoopsSelected: privateObject.getScoopsSelected        // called from kcalCalculator
//   };
// };
//
// var kcalCalculator = function () {
//   var privateObject = {
//     // kcalLeftForTheDay: 2500,
//     // kcalUndoStore: 0,
//     // getKcalLeftForTheDay: function () {
//     //   return common.kcalLeftForTheDay;
//     // },
//     // setKcalLeftForTheDay: function (kcals) {
//     //   common.kcalLeftForTheDay = kcals;
//     // },
//     calculateKcalsLeft: function () {
//       console.log(common.getKcalLeftForTheDay());
//       console.log("vitaminFood().getSelectedKcalPerScoop(): " + vitaminFood().getSelectedKcalPerScoop());
//       var calculatedKcals = common.getKcalLeftForTheDay() - vitaminFood().getSelectedKcalPerScoop() * common.getScoopsSelected();
//       common.setKcalLeftForTheDay(calculatedKcals);
//       console.log("common.getKcalLeftForTheDay(): " + common.getKcalLeftForTheDay());
//     }
//   };
//   return {
//     calculateKcalsLeft: privateObject.calculateKcalsLeft
//   };
// };
//
// // var tester2 = function () {
// //   function test() {
// //     console.log("tester2.test");
// //   }
// //   return {
// //     test: test
// //   };
// // };
//
// //viewModel
// var vmKcal = this;
// vmKcal.public = {
//   // vitaminFoodInstance: vitaminFood(),
//   selectVitaminFood: vitaminFood().selectVitaminFood,
//   selectNumberOfScoops: scoops().selectNumberOfScoops,
//   hiddenButton: common.getHiddenButton(),
//   // hiddenButtonScoops: common.getHiddenButton().scoops
// };



// -------------------------------------------------------------------- 5
//                    Everything organized in 1 object literal voor common-use properties (+get/set)
//                    and 3 functions that return their public interface to each-other
//                    public facing interface of controller through viewModel
//                Improvements: - refactor common-use ol: -remove objectspecific props? get/set
//                              - use iife
//                              - use singleton?

//
// //common use object literal
// var common = {
//   vitaminFoodSelectedIndex: 0,
//   scoopsSelected: 3,
//   kcalLeftForTheDay: 2500,
//   kcalUndoStore: 0,
//   hiddenButton: {
//     vitaminFood: false,
//     scoops: true
//   },
//   setVitaminFoodSelectedIndex: function (index) {
//     this.vitaminFoodSelectedIndex = index;
//   },
//   getVitaminFoodSelectedIndex: function () {
//     return this.vitaminFoodSelectedIndex;
//   },
//   setScoopsSelected: function (index) {
//     this.scoopsSelected = index + 1;
//   },
//   getScoopsSelected: function () {
//     return this.scoopsSelected;
//   },
//   getKcalLeftForTheDay: function () {
//     return this.kcalLeftForTheDay;
//   },
//   setKcalLeftForTheDay: function (kcals) {
//     this.kcalLeftForTheDay = kcals;
//   },
//   setHiddenButton: function (hiddenButtonPropertyString, isHidden) {
//     if(hiddenButtonPropertyString == "vitaminFood"){
//       this.hiddenButton.vitaminFood = isHidden;
//     }
//     else if (hiddenButtonPropertyString == "scoops"){
//       this.hiddenButton.scoops = isHidden;
//     }
//   },
//   getHiddenButton: function () {
//     return this.hiddenButton;
//   }
// };
//
// //function returning objects
// var vitaminFood = function () {
//   var privateObject = {
//     smaken: [
//       {title: 'Vanilla', kcalPerScoop: 100},
//       {title: 'Chocolat', kcalPerScoop: 200},
//       {title: 'Strawberry', kcalPerScoop: 300},
//       {title: 'Apple', kcalPerScoop: 50},
//       {title: 'Chicken', kcalPerScoop: 400}
//     ],
//     selectVitaminFood: function () {
//       var hideSheet = $ionicActionSheet.show({
//         buttons: privateObject.populateButtonsWithSmaken(),
//         titleText: 'Choose your VitaminFood',
//         cancelText: 'Return to previous screen',
//         cancel: function () {
//         },
//         buttonClicked: function (index) {
//           common.setVitaminFoodSelectedIndex(index);
//           console.log(privateObject.getSelectedSmaak() + " " + privateObject.getSelectedKcalPerScoop());
//           common.setHiddenButton("vitaminFood", true);
//           common.setHiddenButton("scoops", false);
//           // console.log(KcalCounter.testFactory);
//           console.log("in selectVitaminFood fn, common.setHiddenButton -->");
//           console.log("prior common.setHiddenButton(common.hiddenButton.vitaminFood, true)");
//           console.log("common.hiddenButton.vitaminFood: " + common.hiddenButton.vitaminFood);
//           console.log("common.hiddenButton.scoops: " + common.hiddenButton.scoops);
//
//           console.log("after: ");
//           console.log("common.hiddenButton.vitaminFood: " + common.hiddenButton.vitaminFood + " common.hiddenButton.scoops: " + common.hiddenButton.scoops);
//           console.log("common.getHiddenButton(): " + common.getHiddenButton() + "  common.getHiddenButton().vitaminFood: " + common.getHiddenButton().vitaminFood + " common.getHiddenButton().scoops: " + common.getHiddenButton().scoops);
//           console.log("hiddenButtonVitaminFood4 vmKcal.public.hiddenButton*: " + vmKcal.public.hiddenButton.vitaminFood + "  hiddenButtonScoops: " + vmKcal.public.hiddenButton.scoops );
//           return true;
//         }
//       });
//     },
//     populateButtonsWithSmaken: function () {
//       var buttonsArray = [];
//       var populateButtonsArray = function (element, index, array) {
//         buttonsArray.push({text: element.title});
//       };
//       this.smaken.forEach(populateButtonsArray);
//       return buttonsArray;
//     },
//     getSelectedSmaak: function () {
//       console.log(common.getVitaminFoodSelectedIndex());
//       return this.smaken[common.getVitaminFoodSelectedIndex()].title;
//     },
//     getSelectedKcalPerScoop: function () {
//       return privateObject.smaken[common.getVitaminFoodSelectedIndex()].kcalPerScoop;
//     }
//   };
//
//   return {
//     selectVitaminFood: privateObject.selectVitaminFood, //called from exporter
//     getSelectedKcalPerScoop: privateObject.getSelectedKcalPerScoop //called from scoop
//   };
// }
//
// var scoops = function () {
//   var privateObject = {
//     maxNumberOfScoops: 10,
//     selectNumberOfScoops: function () {
//       var hideSheet = $ionicActionSheet.show({
//         buttons: privateObject.populateButtonsWithScoops(),
//         titleText: 'Choose the Number of Scoops you had',
//         cancelText: 'Return to previous screen',
//         cancel: function () {
//         },
//         buttonClicked: function (index) {
//           common.setScoopsSelected(index);
//           console.log(common.getScoopsSelected() + " scoop(s)");
//           kcalCalculator().calculateKcalsLeft();
//           common.setHiddenButton("scoops", true);
//           return true;
//         }
//       });
//     },
//     populateButtonsWithScoops: function () {
//       var buttonsArray = [];
//       var maxScoops = this.getMaxNumberOfScoops();
//       for (var i = 1; i <= maxScoops; i++) {
//         var buttonText;
//         if (i == 1) {
//           buttonText = i + " scoop";
//         }
//         else {
//           buttonText = i + " scoops";
//         }
//         buttonsArray.push({text: buttonText});
//       }
//       return buttonsArray;
//     },
//     getMaxNumberOfScoops: function () {
//       return this.maxNumberOfScoops;
//     }
//   };
//   return {
//     selectNumberOfScoops: privateObject.selectNumberOfScoops, // called from exporter
//   };
// };
//
// var kcalCalculator = function () {
//   var privateObject = {
//     calculateKcalsLeft: function () {
//       console.log(common.getKcalLeftForTheDay());
//       console.log("vitaminFood().getSelectedKcalPerScoop(): " + vitaminFood().getSelectedKcalPerScoop());
//       var calculatedKcals = common.getKcalLeftForTheDay() - vitaminFood().getSelectedKcalPerScoop() * common.getScoopsSelected();
//       common.setKcalLeftForTheDay(calculatedKcals);
//       console.log("common.getKcalLeftForTheDay(): " + common.getKcalLeftForTheDay());
//     }
//   };
//   return {
//     calculateKcalsLeft: privateObject.calculateKcalsLeft
//   };
// };
//
// //viewModel
// var vmKcal = this;
// vmKcal.public = {
//   selectVitaminFood: vitaminFood().selectVitaminFood,
//   selectNumberOfScoops: scoops().selectNumberOfScoops,
//   hiddenButton: common.getHiddenButton(),
// };
//
