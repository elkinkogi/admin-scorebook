'use strict';

describe('Service: sessionservice', function () {

  // load the service's module
  beforeEach(module('adminAppApp'));

  // instantiate service
  var sessionservice;
  beforeEach(inject(function (_sessionservice_) {
    sessionservice = _sessionservice_;
  }));

  it('should do something', function () {
    expect(!!sessionservice).toBe(true);
  });

});
