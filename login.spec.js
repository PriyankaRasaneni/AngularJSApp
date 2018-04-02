describe('login and Logot JS APP',function(){
var until = protractor.ExpectedConditions;

var url = 'http://amasik.com/demo/angularjs/angular-app/#/login';
var loginId = element(by.model('login.email'));
var password = element(by.model('login.password'));
var loginButton = element(by.buttonText('Sign In'));
var profiledropdown = element(by.xpath('//*[@id="ng-app"]/body/div[2]/div[1]/div/div/div/ul/li[2]/a'));
var appName = element(by.xpath('//*[@id="ng-app"]/body/div[1]/div/div/div/a[2]'));
var addCustomerLink = element(by.xpath('//*[@id="ng-app"]/body/div[2]/div[2]/div/div/ul/li[4]/a'));
var logoutlink = element(by.xpath('//*[@id="ng-app"]/body/div[2]/div[1]/div/div/div/ul/li[2]/ul/li[2]/a'));
//var userName = element(by.id('username'));
var firstName = element(by.xpath('//*[@id="edit-profile"]/fieldset/div[2]/div/input'));
var lastName = element(by.xpath('//*[@id="edit-profile"]/fieldset/div[3]/div/input'));
var email = element(by.model('customer.email'));
var phone = element(by.model('customer.phone'));
var bioData = element(by.model('customer.bio'));
var selectCountry = element(by.model('customer.country'));
var saveButton = element(by.buttonText('Save'));





beforeAll(function(){
    browser.ignoreSynchronization = true;
    browser.get(url);
    browser.waitForAngular(true);
    browser.driver.sleep(3000);

})
 it('Login',function(){
     loginId.click().clear().sendKeys(browser.params.login.email);
     password.click().clear().sendKeys(browser.params.login.password);
     loginButton.click();
     expect(appName.getText()).toEqual('AngularJS Framework with Bootstrap Template'); //Verify the title of the application

     console.log('App is successfully Logged IN')
     browser.driver.sleep(3000);

 })
 it('Add customer',function(){
addCustomerLink.click();
//userName.click().clear().sendKeys("PriyankaRasaneni"); // for logged in User username will dispaly with Username
firstName.click().sendKeys("Priyanka");
lastName.click().sendKeys("Rasaneni");
email.click().sendKeys("priyarasaneni@gmail.com");
phone.click().sendKeys("9874563215");
bioData.click().sendKeys("Testing");

     //First click on Dropdown
    selectCountry.click().then(function(){
    //second move mouse to particular value in list
    browser.action().mouseMove(element(by.xpath('//*[@id="edit-profile"]/fieldset/div[7]/div/select/option[4]'))).click().perform();
    });
    saveButton.click();
console.log('customer is added');
browser.driver.sleep(5000);



 })

it('Logout',function(){
    profiledropdown.click();
    logoutlink.click();
    browser.driver.sleep(3000);
})










});