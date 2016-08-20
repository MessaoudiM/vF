/**
 * Created by mm on 19/08/16.
 */
// (function () {
  angular.module('starter.factories')
    .factory('BMRCalculator', function (modalService, $timeout, $q, PersonalDetails) {

      var BMR =null;

      var calculateBMR = function () {
        console.log('calculateBMR');
        var sexFactorMale = 10;
        var sexFactorFemale = 7;
        var sexFactor;
        var personalDetails = PersonalDetails.getPersonalDetails();
        if(personalDetails.sex === "male"){
          sexFactor = sexFactorMale;
        }
        else {
          sexFactor = sexFactorFemale;
        }
        BMR = (sexFactor * personalDetails.weight)+(1 * personalDetails.length)
      };

      // ORIGINAL METHOD
      // var enterPersonalDetails = function () {
      //   PersonalDetails.openModal();
      //   calculateBMR();
      //   console.log(BMR);
      // };

      // PROMISE/DEFERRED
      var enterPersonalDetails = function () {
        return $q(function (resolve, reject) {
          setTimeout(function () {
            console.log(BMR);

            if(BMR === null){
              console.log('bmr null');
            }
            else {
              console.log('bmr NOT null');
            }
          }, 1000);
        });
        //     if(PersonalDetails.openModal()){
        //
        //     }
        //     else {
        //
        //     }
        //   }, 1000);
        // });

        var promise = enterPersonalDetails();

        promise.then(function (success) {
          calculateBMR();
          console.log(BMR);
          console.log('success: ', success);
        }, function (error) {
          console.log('error: ', error);
        });
      };

      return {
        calculateBMR: enterPersonalDetails
      };
    });
// })();
