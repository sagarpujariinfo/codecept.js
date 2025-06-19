const loginPage = require('../pages/OrangeLoginPage');
const dashboardPage = require('../pages/DashboardPage');
const adminPage = require('../pages/AdminPage');
const addUserPage = require('../pages/AddUserPage');

Feature('Admin - Add User');

Before(async ({ I }) => {
  I.amOnPage('/web/index.php/auth/login');
  loginPage.login('Admin', 'admin123');
  dashboardPage.verifyDashboard();
  adminPage.goToAdmin();
  adminPage.clickAddUser();
  addUserPage.waitForForm();
});

Scenario('Add a new user with valid data', async ({ I }) => {
  const userData = {
    role: 'ESS',
    nameStart: 'Ja', // Will trigger 'Jane Doe' from suggestion list
    status: 'Enabled',
    username: `testuser${Date.now()}`,
    password: 'Password@123'
  };

  addUserPage.fillForm(userData);
  addUserPage.submitForm();
  I.wait(3);
  addUserPage.verifySuccess();
});

Scenario('Submit empty Add User form and expect validation errors', async ({ I }) => {
  addUserPage.submitForm();
  I.wait(3);
  addUserPage.verifyValidationErrors();
});
