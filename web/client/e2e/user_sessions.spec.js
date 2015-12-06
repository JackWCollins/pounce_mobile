'use strict';

describe('Login', function () {
  var page;

  beforeEach(function () {
    browser.get('/#/login');
  });

  describe('as an agent', function () {
    var fail = function() { expect(true).toBe(false); }
    var loginURL;
    var email = element(by.id('email'));
    var password = element(by.id('password'));
    var loginButton = element(by.xpath('//form[1]/button[@type="submit"]'));
    var error = element(by.css('alert-danger'));

    it('should redirect to the login page if trying to load protected page while not authenticated', function() {
      browser.get('/#/login');
      loginURL = browser.getCurrentUrl();

      browser.get('/#/');
      expect(browser.getCurrentUrl()).toEqual(loginURL);
    });

    it('should warn on missing/malformed credentials', function() {
      email.clear();
      password.clear();

      password.sendKeys('test');
      loginButton.click();
      expect(error.getText()).toMatch('Invalid login credentials. Please try again.');

      email.sendKeys('test');
      loginButton.click();
      expect(error.getText()).toMatch('Invalid login credentials. Please try again.');
    });

    it('should accept a valid email address and password', function() {
      email.clear();
      password.clear();

      email.sendKeys('admin@example.com');
      password.sendKeys('password');
      loginButton.click();
      expect(browser.getCurrentUrl()).not.toEqual(loginURL);
    });

    it('should return to the login page after logout', function() {
      var logoutButton = $('a.logout');
      logoutButton.click();
      expect(browser.getCurrentUrl()).toEqual(loginURL);
    });
  });
});