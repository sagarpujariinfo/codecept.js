const { I } = inject();

module.exports = {
  elements: {
    addUserForm: '//h6[text()="Add User"]',
    userRoleDropdown:
      '(//label[text()="User Role"]/../following-sibling::div)[1]//div[contains(@class,"oxd-select-text-input")]',
    employeeNameField: '//input[@placeholder="Type for hints..."]',
    statusDropdown:
      '(//label[text()="Status"]/../following-sibling::div)[1]//div[contains(@class,"oxd-select-text-input")]',
    usernameField: '(//label[text()="Username"]/../following-sibling::div//input)[1]',
    passwordField: '//label[text()="Password"]/../following-sibling::div/input',
    confirmPasswordField: '//label[text()="Confirm Password"]/../following-sibling::div/input',
    saveButton: '//button[normalize-space()="Save"]',
    successToast: '//div[@class="oxd-toast"]//p[contains(text(),"Success")]',
    validationError: '//span[contains(@class, "oxd-input-field-error-message")]',
  },

  waitForForm() {
    I.waitForElement(this.elements.addUserForm, 10);
  },

  fillEmployeeName(nameStart) {
    I.waitForElement(this.elements.employeeNameField, 10);
    I.fillField(this.elements.employeeNameField, nameStart);
    I.wait(2); // let suggestions load
    I.pressKey('ArrowDown');
    I.wait(1); // give it a sec before selecting
    I.pressKey('Enter');
    I.wait(1); // ensure the field is filled
  },

  fillForm({ role, nameStart, status, username, password }) {
    I.waitForElement(this.elements.userRoleDropdown, 10);
    I.click(this.elements.userRoleDropdown);
    I.waitForText(role, 5);
    I.click(`//div[@role="option"]//span[contains(text(),"${role}")]`);

    this.fillEmployeeName(nameStart);

    I.waitForElement(this.elements.statusDropdown, 10);
    I.click(this.elements.statusDropdown);
    I.waitForText(status, 5);
    I.click(`//div[@role="option"]//span[contains(text(),"${status}")]`);

    I.waitForElement(this.elements.usernameField, 10);
    I.fillField(this.elements.usernameField, username);

    I.waitForElement(this.elements.passwordField, 10);
    I.fillField(this.elements.passwordField, password);

    I.waitForElement(this.elements.confirmPasswordField, 10);
    I.fillField(this.elements.confirmPasswordField, password);
  },

  submitForm() {
    I.waitForElement(this.elements.saveButton, 10);
    I.click(this.elements.saveButton);
  },

  verifySuccess() {
    I.waitForElement(this.elements.successToast, 25); // Increased to 25s
    I.see('Success');
  },

  verifyValidationErrors() {
    I.waitForElement(this.elements.validationError, 5);
    I.seeElement(this.elements.validationError);
  },
};
