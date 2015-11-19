'use strict';

describe('Controller: CreateleagueCtrl', function () {

  // load the controller's module
  beforeEach(module('adminAppApp'));

  var CreateleagueCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateleagueCtrl = $controller('CreateleagueCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateleagueCtrl.awesomeThings.length).toBe(3);
  });
});
