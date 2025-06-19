const { I } = inject();
module.exports = {
  locators: {
    quantityDropdown: 'select[name="quantity"]',
    subtotalText: '//*[contains(text(),"Subtotal (2 items")]/ancestor::*[contains(@class,"sc-subtotal") or contains(@id,"sc-subtotal")]'
  },
  increaseQuantityToTwo() {
    I.waitForElement(this.locators.quantityDropdown, 10);
    I.selectOption(this.locators.quantityDropdown, '2');
  },
  async getSubtotalText() {
    I.waitForElement(this.locators.subtotalText, 10);
    return await I.grabTextFrom(this.locators.subtotalText);
  }
};
