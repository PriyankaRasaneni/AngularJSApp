describe('Creating account', function() {
var until = protractor.ExpectedConditions;
var url = 'http://amasik.com/demo/angularjs/angular-app/#/login';
var createAccountLink = element(by.xpath('//*[@id="ng-app"]/body/div[1]/div/div/div/div/ul/li[1]/a'));
var firstName = element(by.model('signup.firstname'));
var lastName = element(by.model('signup.lastname'));
var email = element(by.model('signup.email'));
var password = element(by.model('signup.password'));
var confirmPassword = element(by.id('confirm_password'));
var checkbox = element(by.xpath('//*[@id="ng-app"]/body/div[3]/div/div/div[1]/div/form/div[2]/span/label'));
var registerButton = element(by.buttonText('Register'));


beforeAll(function(){
    browser.ignoreSynchronization = true;
    browser.get(url);
    browser.waitForAngular(true);
    browser.driver.sleep(3000);

})




it('Creating account in JS', function() {
    createAccountLink.click();
    browser.driver.sleep(3000);
   firstName.sendKeys('Priyanka');
   lastName.sendKeys('Rasaneni');
   email.sendKeys('priyarasaneni@gmail.com');
   password.sendKeys('priyanka@1');
   confirmPassword.sendKeys('priyanka@1');
   checkbox.click();
   registerButton.click();
    browser.driver.sleep(2000);
      
    });
  });
    