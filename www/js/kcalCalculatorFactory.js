/**
 * Created by mm on 19/08/16.
 */
(function () {
  angular.module('starter.factories')
    .factory('KcalCalculator', function () {

      var common = {
        kcalLeftForTheDay: 2500,
        getKcalLeftForTheDay: function () {
          return this.kcalLeftForTheDay;
        },
        setKcalLeftForTheDay: function (kcals) {
          this.kcalLeftForTheDay = kcals;
        },

        // kcalUndoStore: 0,
        // firstTime: true,
        // hiddenButton: {
        //   firstTime: false,
        //   enterKcals: false,
        // },
        // getFirstTime: function () {
        //   return this.firstTime;
        // },
        // setFirstTime: function (bool) {
        //   this.firstTime = bool;
        // },

        // setHiddenButton: function (hiddenButtonPropertyString, isHidden) {
        //   if (hiddenButtonPropertyString === "enterKcals"){
        //     this.hiddenButton.enterKcals = isHidden;
        //   }
        //   else if(hiddenButtonPropertyString === "vitaminFood"){
        //     this.hiddenButton.vitaminFood = isHidden;
        //   }
        //   else if (hiddenButtonPropertyString === "scoops"){
        //     this.hiddenButton.scoops = isHidden;
        //   }
        //   else if (hiddenButtonPropertyString === "firstTime"){
        //     this.hiddenButton.firstTime = isHidden;
        //   }
        // },
        // getHiddenButton: function () {
        //   return this.hiddenButton;
        // }
      };

      var kcalCalculator = function () {
        var privateObject = {
          calculateKcalsLeft: function () {
            console.log(common.getKcalLeftForTheDay());
            console.log("VitaminFoodSelector.getSelectedKcalPerScoop(): " + VitaminFoodSelector.getSelectedKcalPerScoop());
            var calculatedKcals = common.getKcalLeftForTheDay() - VitaminFoodSelector.getSelectedKcalPerScoop() * ScoopSelector.getScoopsSelected();
            common.setKcalLeftForTheDay(calculatedKcals);
            console.log("common.getKcalLeftForTheDay(): " + common.getKcalLeftForTheDay());
          }
        };
        return {
          calculateKcalsLeft: privateObject.calculateKcalsLeft
        };
      };

      return {
        calculateKcalsLeft: kcalCalculator().calculateKcalsLeft
      };

    });
})();
