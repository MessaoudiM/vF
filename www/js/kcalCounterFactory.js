/**
 * Created by mm on 11/08/16.
 *
 *  DELETE FILE
 */
angular.module('starter.factories', [])
  // .factory('KcalCounter', function(){
  .factory('KcalCounter', function(){
    var testFactory = function () {
      return "testFactory success";
    };

//function returning objects
    var vitaminFood = function () {
      var privateObject = {
        smaken: [
          {title: 'Vanilla', kcalPerScoop: 100},
          {title: 'Chocolat', kcalPerScoop: 200},
          {title: 'Strawberry', kcalPerScoop: 300},
          {title: 'Apple', kcalPerScoop: 50},
          {title: 'Chicken', kcalPerScoop: 400}
        ],
        selectVitaminFood: function () {
          var hideSheet = $ionicActionSheet.show({
            buttons: privateObject.populateButtonsWithSmaken(),
            titleText: 'Choose your VitaminFood',
            cancelText: 'Return to previous screen',
            cancel: function () {
            },
            buttonClicked: function (index) {
              common.setVitaminFoodSelectedIndex(index);
              console.log(privateObject.getSelectedSmaak() + " " + privateObject.getSelectedKcalPerScoop());
              common.setHiddenButton("vitaminFood", true);
              common.setHiddenButton("scoops", false);
              console.log(KcalCounter.testFactory);
              return true;
            }
          });
        },
        populateButtonsWithSmaken: function () {
          var buttonsArray = [];
          var populateButtonsArray = function (element, index, array) {
            buttonsArray.push({text: element.title});
          };
          this.smaken.forEach(populateButtonsArray);
          return buttonsArray;
        },
        getSelectedSmaak: function () {
          console.log(common.getVitaminFoodSelectedIndex());
          return this.smaken[common.getVitaminFoodSelectedIndex()].title;
        },
        getSelectedKcalPerScoop: function () {
          return privateObject.smaken[common.getVitaminFoodSelectedIndex()].kcalPerScoop;
        },
        getSmaken: function () {
          return privateObject.smaken;
        }
      };

      return {
        getSmaken: privateObject.getSmaken,
        selectVitaminFood: privateObject.selectVitaminFood, //called from exporter
        getSelectedKcalPerScoop: privateObject.getSelectedKcalPerScoop //called from scoop
      };
    }

    return {
      testFactory: testFactory(),
      getSmaken: vitaminFood().getSmaken,
      selectVitaminFood: vitaminFood().selectVitaminFood,
      getSelectedKcalPerScoop: vitaminFood().getSelectedKcalPerScoop
    };
  })
;
