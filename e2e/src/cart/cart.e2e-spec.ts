import { CartPage } from './cart.po';

describe('tradewin-front-waheed App,=>home page', () => {
  let page: CartPage;

  beforeEach(() => {
    page = new CartPage();
  });



  it('should contain paragraph text', () => {
      page.navigateTo()
    expect(page.getParaText()).toContain('Brand name');
  });


 


});