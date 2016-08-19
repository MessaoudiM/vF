/**
 * Created by mm on 19/08/16.
 */
// (function () {
  angular.module('starter.factories')
    .factory('BMRCalculator', function (modalService) {

      // Form data for the login modal
      var personalDetails = {
        sex: true,
        age: 25,
        weight: 80,
        length: 175,
        activitylevel: 2
      };

      var calculateBMR = function () {
        console.log('calculateBMR');
        var sexFactorMale = 10;
        var sexFactorFemale = 7;
        var sexFactor, BMR;
        if(personalDetails.sex === "male"){
          sexFactor = sexFactorMale;
        }
        else {
          sexFactor = sexFactorFemale;
        }
        BMR = (sexFactor * personalDetails.weight)+(1 * personalDetails.length)
      };

      // // Create the login modal that we will use later
      // $ionicModal.fromTemplateUrl('templates/personalDetails.html', {
      //   // $ionicModal.fromTemplateUrl('templates/vitaminFoodSelector.html', {
      //   scope: this
      // }).then(function(modal) {
      //   this.modal = modal;
      // });
      //
      // // Triggered in the login modal to close it
      // this.closeModal = function() {
      //   this.modal.hide();
      // };

      // Open the login modal
      var openModal = function() {
        console.log('open');
        // this.modal.show();
        this.modal = modalService;

        this.modal.showModal('templates/personalDetails.html');
      };

      // Perform the login action when the user submits the login form
      var submitPersonalDetails = function() {
        console.log('Submitting personal details: ', this.personalDetails);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
          this.closeModal();
        }, 1000);
      };

      return {
        // showModal: modalService.show
        calculateBMR: openModal
      };
    });
// })();
