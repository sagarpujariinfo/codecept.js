exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://opensource-demo.orangehrmlive.com',
      show: true,
      waitForTimeout: 10000,
      timeout: 20000,
      waitForAction: 500,
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
    chromium: {
      browsers: ['chromium'],
      chunks: (files) => files.map(f => [f])
    },
    firefox: {
      browsers: ['firefox'],
      chunks: (files) => files.map(f => [f])
    }
  }
};
