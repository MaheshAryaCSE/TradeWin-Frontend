import { LoginPage } from './login.po';
import { HomePage } from '../home/home.po'
describe('tradewin-front-waheed App,=>login page', () => {
    let wrong = {
        email: "sadsdddd@gmail.com",
        password: 'dsdeewdwer'
    }
    let page: LoginPage;
    let homePage: HomePage;
    beforeEach(() => {
        page = new LoginPage();
        homePage = new HomePage();
    });

    it('should contain correct path', () => {
        page.navigateTo();
        expect(page.getParaText()).toEqual('LOGIN');
    });

      it('login failed due to wrong credentials', () => {
        page.navigateTo();
        page.checkCredentials(wrong)
        expect(page.getErrorMsg()).toEqual('failed');
      });

    it('login success due to correct credentials', () => {
        page.navigateTo();
        page.checkCredentials();
        expect(homePage.getTagsCount()).toEqual(3);
    });
});
