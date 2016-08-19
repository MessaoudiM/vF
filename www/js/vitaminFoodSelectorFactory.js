/**
 * Created by mm on 19/08/16.
 */
// (function(){
  angular.module('starter.factories')
    .factory('VitaminFoodSelector', function($q, $ionicActionSheet, ScoopSelector){

      var common = {
        vitaminFoodSelectedIndex: 0,
        hiddenButton: {
          vitaminFood: true,
        },
        setVitaminFoodSelectedIndex: function (index) {
          this.vitaminFoodSelectedIndex = index;
        },
        getVitaminFoodSelectedIndex: function () {
          return this.vitaminFoodSelectedIndex;
        },
        setHiddenButton: function (hiddenButtonPropertyString, isHidden) {
          if(hiddenButtonPropertyString === "vitaminFood"){
            this.hiddenButton.vitaminFood = isHidden;
          }
        },
        getHiddenButton: function () {
          return this.hiddenButton;
        }
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
                ScoopSelector.setHiddenButton(false);
                // console.log(KcalCounter.testFactory);
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
        getSmaken: vitaminFood().getSmaken,
        selectVitaminFood: vitaminFood().selectVitaminFood,
        getSelectedKcalPerScoop: vitaminFood().getSelectedKcalPerScoop
      };
    });
// })();

