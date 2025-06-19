const { I } = inject();

module.exports = {
 // menShoes: { xpath: "//div[text()=\"Men's Shoes\"]" },
  casualShoes: { xpath: "//a[text()='Casual Shoes']" },
  sneaker: { xpath: "//a[text()='Sneakers']" },

  scrollToMenShoes() {
    I.scrollTo(this.menShoes);
  },
  // openMensShoes() {
  //   I.forceClick(this.menShoes);
  //   I.waitForVisible(this.casualShoes, 5);
  // },

  openCasualShoes() {
    I.scrollTo(this.casualShoes);
    I.forceClick(this.casualShoes);
    I.waitForVisible(this.sneaker, 5);
  },

  selectSneakers() {
    I.scrollTo(this.sneaker);
    I.forceClick(this.sneaker);
  }
};
