'use strict';

describe('Controller: ListleagueCtrl', function () {

  // load the controller's module
  beforeEach(module('adminAppApp'));

  var ListleagueCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListleagueCtrl = $controller('ListleagueCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListleagueCtrl.awesomeThings.length).toBe(3);
  });
});
