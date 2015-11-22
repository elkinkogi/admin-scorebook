'use strict';

describe('Service: uploadImg', function () {

  // load the service's module
  beforeEach(module('adminAppApp'));

  // instantiate service
  var uploadImg;
  beforeEach(inject(function (_uploadImg_) {
    uploadImg = _uploadImg_;
  }));

  it('should do something', function () {
    expect(!!uploadImg).toBe(true);
  });

});
