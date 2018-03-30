describe('login and Logot JS APP',function(){
var until = protractor.ExpectedConditions;

var url = 'http://amasik.com/demo/angularjs/angular-app/#/login';
var loginId = element(by.model('login.email'));
var password = element(by.model('login.password'));
var loginButton = element(by.buttonText('Sign In'));
var profiledropdown = element(by.xpath('//*[@id="ng-app"]/body/div[2]/div[1]/div/div/div/ul/li[2]/a'));




beforeAll(function(){
    browser.ignoreSynchronization = true;
    browser.get(url);
    browser.waitForAngular(true);
    browser.driver.sleep(3000);

})
 it('Login',function(){
     loginButton.click();
     browser.driver.sleep(3000);





 })

it('Logout',function(){
    var select = profiledropdown;
select.$('[value="Logout"]').click();
    // profiledropdown.click();
    // browser.waitForAngular();






})










});