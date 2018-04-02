//var HtmlReporter = require('protractor-html-screenshot-reporter');
exports.config = {
framework: 'jasmine',
seleniumAddress: 'http://localhost:4444/wd/hub',
ignoreUncaughtExceptions: true,
specs:['D://Priyanka//Testing//AngularJSApp//login.spec.js'],
//specs: ['C://Users//user//Desktop//Priyanka//AngularJS test case//CreateAccount.spec.js'],
capabilities: {
 browserName: 'chrome'
  },
  onPrepare: function(){
    browser.manage().window().maximize();
   // jasmine.getEnv().addReporter(new HtmlReporter({
      //  baseDirectory: '/tmp/screenshots' }));
    browser.manage().timeouts().implicitlyWait(5000);
},
params: {
    login: {
      email: 'priyarasaneni@gmail.com',
      password: 'priyanka@1'
    }
  },
 jasmineNodeOpts: {
 showColors: true,
 defaultTimeoutInterval: 30000000,
     }
      }