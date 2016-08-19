/**
 * Created by mm on 19/08/16.
 */
(function () {

  angular.module('starter.factories')
    .factory('ScoopSelector', function($ionicActionSheet, KcalCalculator){
      var common = {
        scoopsSelected: 3,
        hiddenButton: {
          scoops: true
        },
        setScoopsSelected: function (index) {
          this.scoopsSelected = index + 1;
        },
        getScoopsSelected: function () {
          return this.scoopsSelected;
        },
        setHiddenButton: function (isHidden) {
          common.hiddenButton.scoops = isHidden;
        },
        getHiddenButton: function () {
          return this.hiddenButton;
        },
        isHiddenButton: function () {
          return this.hiddenButton.scoops;
        }
      };

      var scoops = function () {
        var privateObject = {
          maxNumberOfScoops: 10,
          selectNumberOfScoops: function () {
            var hideSheet = $ionicActionSheet.show({
              buttons: privateObject.populateButtonsWithScoops(),
              titleText: 'Choose the Number of Scoops you had',
              cancelText: 'Return to previous screen',
              cancel: function () {
              },
              buttonClicked: function (index) {
                common.setScoopsSelected(index);
                console.log(common.getScoopsSelected() + " scoop(s)");
                KcalCalculator.calculateKcalsLeft();
                common.setHiddenButton("scoops", true);
                common.setHiddenButton("enterKcals", false);
                return true;
              }
            });
          },
          populateButtonsWithScoops: function () {
            var buttonsArray = [];
            var maxScoops = this.getMaxNumberOfScoops();
            for (var i = 1; i <= maxScoops; i++) {
              var buttonText;
              if (i == 1) {
                buttonText = i + " scoop";
              }
              else {
                buttonText = i + " scoops";
              }
              buttonsArray.push({text: buttonText});
            }
            return buttonsArray;
          },
          getMaxNumberOfScoops: function () {
            return this.maxNumberOfScoops;
          }
        };
        return {
          selectNumberOfScoops: privateObject.selectNumberOfScoops // called from exporter
        };
      };
      return {
        selectNumberOfScoops: scoops().selectNumberOfScoops,
        getScoopsSelected: common.getScoopsSelected(),
        setHiddenButton: common.setHiddenButton,
        // isHiddenButton: common.isHiddenButton,
        getHiddenButton: common.getHiddenButton
      };
    });

})();
