'use strict';

describe('Controller: UpdateleagueCtrl', function () {

  // load the controller's module
  beforeEach(module('adminAppApp'));

  var UpdateleagueCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdateleagueCtrl = $controller('UpdateleagueCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UpdateleagueCtrl.awesomeThings.length).toBe(3);
  });
});
