import { AppPage } from './app.po';

describe('tradewin-front-waheed App,=>main page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should contain correct path', () => {
    page.navigateTo();
    expect(page.geturl()).toEqual('http://localhost:5555/');
  });
});
