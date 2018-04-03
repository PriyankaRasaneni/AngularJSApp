
exports.config = {
framework: 'jasmine',
seleniumAddress: 'http://localhost:4444/wd/hub',
ignoreUncaughtExceptions: true,
specs:['D://Priyanka//Testing//AngularJSApp//login.spec.js'],
specs: ['D://Priyanka//Testing//AngularJSApp//CreateAccount.spec.js'],
capabilities: {
 browserName: 'chrome'
  },
  onPrepare: function(){
    browser.manage().window().maximize();
   
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
 defaultTimeoutInterval: 220000,
     }
      }