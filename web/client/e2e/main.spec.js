'use strict';

describe('The home page', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should include a client list', function() {
    expect(page.clientList).toBe
  });

  it('should list 3 clients', function () {
    expect(page.clients.count()).toBe(3);
  });

});
