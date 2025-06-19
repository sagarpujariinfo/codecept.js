const { I } = inject();

module.exports = {
  locators: {
    allBtn: { xpath: '//a[@id="nav-hamburger-menu"]' },
    seeAll: { xpath: "//a[@aria-label='See All Categories']" },
    mensFashion: { xpath: "//div[@class='hmenu hmenu-visible']//section[1]//ul[1]//li[1]//a[1]" },
  },

  clickAll() {
    I.waitForVisible(this.locators.allBtn, 10);
    I.forceClick(this.locators.allBtn);
    I.waitForVisible(this.locators.seeAll, 10);  // ensure menu opened
  },

  scrollToSeeAll() {
    I.waitForVisible(this.locators.seeAll, 20);  // wait for DOM presence
    I.scrollTo(this.locators.seeAll);
    I.waitForVisible(this.locators.seeAll, 10);  // confirm it's visible
  },

  clickSeeAll() {
    I.forceClick(this.locators.seeAll);
    I.waitForVisible(this.locators.mensFashion, 10);
  },

  goToMensFashion() {
    I.forceClick(this.locators.mensFashion);
  },
};
