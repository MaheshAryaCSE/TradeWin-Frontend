import { HomePage } from './home.po';

describe('tradewin-front-waheed App,=>home page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should contain tags count', () => {
    page.navigateTo();
    expect(page.getTagsCount()).toEqual(3);
  });

  it('should contain paragraph text', () => {
    expect(page.getParaText()).toContain('Properties');
  });

  it('should exist anchor tag', () => {
    expect(page.linkExistence()).toBe(true);
  });
 


});