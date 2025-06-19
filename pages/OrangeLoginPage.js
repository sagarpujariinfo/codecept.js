const { I } = inject();

module.exports = {
  // Locators
  fields: {
    username: 'input[name="username"]',
    password: 'input[name="password"]'
  },
  buttons: {
    login: 'button[type="submit"]'
  },
  messages: {
    error: '.oxd-alert-content-text',
    required: '//span[text()="Required"]'
  },

  // Actions
  login(username, password) {
    I.fillField(this.fields.username, username);
    I.fillField(this.fields.password, password);
    I.click(this.buttons.login);
  },

  submitEmpty() {
    I.click(this.buttons.login);
  }
};
