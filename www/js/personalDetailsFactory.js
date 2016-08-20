/**
 * Created by mm on 19/08/16.
 */
(function () {
  angular.module('starter')
    .factory('PersonalDetails', function (modalService, $timeout) {

      var modal, personalDetails;

      // Form data for the login modal
      personalDetails = {
        sex: true,
        age: 25,
        weight: 80,
        length: 175,
        activitylevel: 2
      };

      var getPersonalDetails = function () {
        return personalDetails;
      };

      var setPersonalDetails = function (personalDetails) {
        personalDetails = personalDetails;
      };

      // Open the login modal
      var openModal = function() {
        modal = modalService;
        modal.showModal('templates/personalDetails.html');
      };

      var closeModal = function () {
        modal.closeModal();
      };

      // Perform the login action when the user submits the login form
      var submitPersonalDetails = function(personalDetails) {
        setPersonalDetails(personalDetails);
        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
          console.log('close1');
          closeModal();
          console.log('close2');
        }, 1000);
      };

      return {
        openModal: openModal,
        closeModal: closeModal,
        submitPersonalDetails: submitPersonalDetails,
        getPersonalDetails: getPersonalDetails
        // personalDetails: personalDetails,
      };

    });
})();
