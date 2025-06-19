const loginPage = require('../pages/OrangeLoginPage.js');
const dashboardPage = require('../pages/DashboardPage.js');

Feature('OrangeHRM Login Scenarios');

Scenario('Valid Login', async ({ I }) => {
  I.amOnPage('/web/index.php/auth/login');
  loginPage.login('Admin', 'admin123');
  dashboardPage.verifyDashboard();
});

Scenario('Invalid Login - Wrong Password', async ({ I }) => {
  I.amOnPage('/web/index.php/auth/login');
  loginPage.login('Admin', 'wrongpass');
  I.see('Invalid credentials', loginPage.messages.error);
});

Scenario('Required Fields Validation', async ({ I }) => {
  I.amOnPage('/web/index.php/auth/login');
  loginPage.submitEmpty();
  I.seeElement(loginPage.messages.required);
});

Scenario('Logout after Login', async ({ I }) => {
  I.amOnPage('/web/index.php/auth/login');
  loginPage.login('Admin', 'admin123');
  dashboardPage.verifyDashboard();
  dashboardPage.logout();
  I.seeElement(loginPage.fields.username);
});

Scenario('Navigate to Admin Page', async ({ I }) => {
  I.amOnPage('/web/index.php/auth/login');
  loginPage.login('Admin', 'admin123');
  dashboardPage.verifyDashboard();
  dashboardPage.navigateToAdmin();
});
