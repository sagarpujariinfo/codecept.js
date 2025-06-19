Feature('Amazon.in Shopping Flow');

Scenario('Add Hot New Release sneaker to cart and verify subtotal', async ({
  I, AmazonHomePage, AmazonCategoryPage, AmazonProductPage, AmazonCartPage
}) => {
  I.amOnPage('https://www.amazon.in/');

  AmazonHomePage.clickAll();
 AmazonHomePage.scrollToSeeAll();
  AmazonHomePage.clickSeeAll();
  AmazonHomePage.goToMensFashion();

 // AmazonCategoryPage.openMensShoes();
  AmazonCategoryPage.openCasualShoes();
  AmazonCategoryPage.selectSneakers();

  AmazonProductPage.selectHotNewRelease();

  const { name, price } = await AmazonProductPage.getProductInfo();
  I.say(`Selected item: ${name} — ${price}`);
  I.assert(name.length > 0, 'product name should be present');
  I.assert(price.includes('₹'), 'price should contain ₹');

  AmazonProductPage.addToCart();
  AmazonProductPage.goToCart();

  AmazonCartPage.increaseQuantityToTwo();
  const subtotal = await AmazonCartPage.getSubtotalText();
  I.say(`Cart subtotal: ${subtotal}`);
  I.assert(subtotal.includes('2'), 'should reflect 2 items');
});
