const { setHeadlessWhen } = require('@codeceptjs/configure');

// Turn on headless mode when running with HEADLESS=true
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://opensource-demo.orangehrmlive.com',
      show: true,
      waitForTimeout: 10000,   // Default timeout for actions
      timeout: 20000,          // Max timeout for step
      waitForAction: 500,      // Delay between steps
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/OrangeLoginPage.js',
    dashboardPage: './pages/DashboardPage.js',
    adminPage: './pages/AdminPage.js',
    addUserPage: './pages/AddUserPage.js'
  },
  bootstrap: null,
  mocha: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'output',
      reportFilename: 'report',
      quiet: true,
      json: true,
      html: false
    }
  },
  name: 'codecept-playwright-demo',
  plugins: {
    allure: {
      enabled: true,
      outputDir: "output",
      require: '@codeceptjs/allure-legacy',
      steps: true,
      screenshots: true,
      fullPageScreenshots: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },

  multiple: {
    parallel: {
      // Runs the test files in parallel (1 per file)
      //chunks: 3,
       grep: {
      'addUser': 'addUser_test',
      'admin': 'admin_test',
      'login': 'orangeLogin_test'
    },
      browsers: ['chromium']
    }
  }
};
