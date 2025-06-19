// pages/AmazonProductPage.js
const { I, locate } = inject();

module.exports = {
  locators: {
    hotNewReleases: 'text=Hot New Releases',
    title: '#productTitle',
    price: '#priceblock_ourprice, #priceblock_dealprice',
    addToCart: 'text=Add to Cart',
    goToCart: 'text=Go to Cart',
  },

  selectHotNewRelease() {
    I.scrollTo(this.locators.hotNewReleases);
    const firstItem = locate('div.s-widget-container a')
      .inside(locate('div').withText('Hot New Releases'))
      .first();
    I.click(firstItem);
  },

  async getProductInfo() {
    I.waitForElement(this.locators.title, 10);
    return {
      name: await I.grabTextFrom(this.locators.title),
      price: await I.grabTextFrom(this.locators.price),
    };
  },

  addToCart() {
    I.click(this.locators.addToCart);
    I.waitForNavigation();
  },

  goToCart() {
    I.click(this.locators.goToCart);
  }
};
