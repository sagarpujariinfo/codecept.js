const loginPage = require('../pages/OrangeLoginPage.js');
const dashboardPage = require('../pages/DashboardPage.js');
const adminPage = require('../pages/AdminPage.js');

Feature('Admin Page - User Management');

Before(async ({ I }) => {
  I.amOnPage('/web/index.php/auth/login');
  loginPage.login('Admin', 'admin123');
  dashboardPage.verifyDashboard();
  adminPage.goToAdmin();
});

Scenario('Search for user by username', async ({ I }) => {
  adminPage.searchByUsername('Admin');
  I.waitForText('Admin', 5);
});

Scenario('Search for user by role', async ({ I }) => {
  adminPage.searchByUserRole('Admin');
  I.waitForText('Admin', 5);
});

Scenario('Search by employee name', async ({ I }) => {
  adminPage.searchByEmployeeName('ja', 'James  Butler'); // Types 'ja' then selects from dropdown
  I.waitForText('James  Butler', 5);
});

Scenario('Search by status', async ({ I }) => {
  adminPage.searchByStatus('Enabled');
  I.waitForText('Enabled', 5);
});

Scenario('Reset filters and validate input is cleared', async ({ I }) => {
  adminPage.searchByUsername('Admin');
  adminPage.resetFilters();
  I.wait(1);
  // Validate the username field is cleared
  I.seeInField('//label[text()="Username"]/../following-sibling::div//input', '');
});

Scenario('Search non-existing user and validate no records', async ({ I }) => {
  adminPage.searchByUsername('nonexistentuser123');
  adminPage.validateNoRecords();
});

Scenario('Check field exists - Employee Name', async ({ I }) => {
  adminPage.goToAdmin();
  I.seeElement('//label[text()="Employee Name"]/../following-sibling::div//input');
});
