const { I } = inject();

module.exports = {
  elements: {
    adminTab: 'a[href="/web/index.php/admin/viewAdminModule"]',
    usernameField: '//label[text()="Username"]/../following-sibling::div/input',
    employeeNameInput: '//input[contains(@placeholder, "Type for hints")]',
    suggestionOption: (name) => `//div[@role="listbox"]//span[contains(text(),"${name}")]`,
    userRoleDropdown: '(//label[text()="User Role"]/../following-sibling::div//div[contains(@class, "oxd-select-text-input")])[1]',
    statusDropdown: '//label[text()="Status"]/../following-sibling::div//div[contains(@class, "oxd-select-text-input")]',
    searchBtn: '//button[normalize-space()="Search"]',
    resetBtn: '//button[normalize-space()="Reset"]',
    addBtn: '//button[normalize-space()="Add"]',
    userRows: '//div[@role="rowgroup"]/div',
    noRecords: '//span[text()="No Records Found"]',
    employeeNameField: '//label[text()="Employee Name"]/../following-sibling::div//input',
  },

  goToAdmin() {
    I.waitForElement(this.elements.adminTab, 10);
    I.click(this.elements.adminTab);
    I.waitForText('System Users', 10);
  },

  searchByUsername(username) {
    I.waitForElement(this.elements.usernameField, 10);
    I.fillField(this.elements.usernameField, username);
    I.click(this.elements.searchBtn);
    I.wait(2);
  },

  searchByUserRole(role) {
    I.waitForElement(this.elements.userRoleDropdown, 5);
    I.click(this.elements.userRoleDropdown);
    I.waitForText(role, 5);
    I.click(`//div[@role="option"]//span[contains(text(),"${role}")]`);
    I.click(this.elements.searchBtn);
    I.wait(2);
  },

  searchByStatus(status) {
    I.waitForElement(this.elements.statusDropdown, 5);
    I.click(this.elements.statusDropdown);
    I.waitForText(status, 5);
    I.click(`//div[@role="option"]//span[contains(text(),"${status}")]`);
    I.click(this.elements.searchBtn);
    I.wait(2);
  },

  searchByEmployeeName(partialText, fullSuggestionToClick) {
    I.waitForElement(this.elements.employeeNameInput, 10);
    I.fillField(this.elements.employeeNameInput, partialText);

    I.waitForElement(this.elements.suggestionOption(fullSuggestionToClick), 10);
    I.click(this.elements.suggestionOption(fullSuggestionToClick));

    I.click(this.elements.searchBtn);
    I.wait(2);
  },

  clickAddUser() {
    I.waitForElement(this.elements.addBtn, 5);
    I.click(this.elements.addBtn);
  },

  resetFilters() {
    I.waitForElement(this.elements.resetBtn, 5);
    I.click(this.elements.resetBtn);
    I.wait(2);
  },

  validateNoRecords() {
    I.waitForElement(this.elements.noRecords, 5);
    I.seeElement(this.elements.noRecords);
  }
};
