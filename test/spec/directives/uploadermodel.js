'use strict';

describe('Directive: uploaderModel', function () {

  // load the directive's module
  beforeEach(module('adminAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<uploader-model></uploader-model>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the uploaderModel directive');
  }));
});
