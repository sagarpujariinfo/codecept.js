const { I } = inject();

module.exports = {
  locators: {
    dashboardHeader: '//h6[text()="Dashboard"]',
    userMenu: '.oxd-userdropdown-name',
    logoutLink: '//a[text()="Logout"]',
    adminMenu: 'a[href="/web/index.php/admin/viewAdminModule"]',
    adminHeader: 'h6:has-text("System Users")'
  },

  verifyDashboard() {
    I.waitForElement(this.locators.dashboardHeader, 10);
  },

  logout() {
    I.click(this.locators.userMenu);
    I.waitForElement(this.locators.logoutLink, 5);
    I.click(this.locators.logoutLink);
  },

  navigateToAdmin() {
    I.click(this.locators.adminMenu);
    I.waitForText('System Users', 10);
  }
};
