'use strict';

describe('Controller: AddteamsCtrl', function () {

  // load the controller's module
  beforeEach(module('adminAppApp'));

  var AddteamsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddteamsCtrl = $controller('AddteamsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddteamsCtrl.awesomeThings.length).toBe(3);
  });
});
