/**
 * Created by mm on 19/08/16.
 */
(function () {
  angular.module('starter.factories')
    .service('modalService', function ($ionicModal) {
      this.showModal = function (templateUrl) {
        var service = this;

        $ionicModal.fromTemplateUrl(templateUrl, {
          scope: null,
          controller: 'MyModalController'
        }).then(function (modal) {
            service.modal = modal;
            service.modal.show();
        });
      };

      this.closeModal = function () {
        this.modal.hide();
      };

    });
})();
