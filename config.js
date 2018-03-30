exports.config = {
framework: 'jasmine',
seleniumAddress: 'http://localhost:4444/wd/hub',
ignoreUncaughtExceptions: true,
specs:['C://Users//user//Desktop//Priyanka//AngularJS test case//login.spec.js'],
//specs: ['C://Users//user//Desktop//Priyanka//AngularJS test case//CreateAccount.spec.js'],
capabilities: {
 browserName: 'chrome'
  },
  onPrepare: function(){
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);
},
 jasmineNodeOpts: {
 showColors: true,
 defaultTimeoutInterval: 30000,
     }
      }