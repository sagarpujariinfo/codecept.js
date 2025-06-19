const { I } = inject();

module.exports = {
  productCards: '.card.h-100',
  addToCartButton: 'button.btn-info',
  checkoutButton: 'a.nav-link.btn.btn-primary',

  addProductsToCart(count = 2) {
    I.waitForElement(this.productCards, 10);
    for (let i = 1; i <= count; i++) {
      I.click(`(//button[contains(@class,'btn-info')])[${i}]`);
    }
  },

  proceedToCheckout() {
    I.click(this.checkoutButton);
  }
};
