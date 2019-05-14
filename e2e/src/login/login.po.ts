import { browser, by, element } from 'protractor';

export class LoginPage {

    private userData = {
        email: 'avinashk@gmail.com',
        password: 'avinashk'
    }
    navigateTo() {
        browser.get('/login');
    }

    checkCredentials(userData: any = this.userData) {
        element(by.name('email')).sendKeys(userData.email);
        element(by.name('password')).sendKeys(userData.password);
        element(by.css('.text-right button')).click();
    }

    getParaText() {
        return element(by.css('.login-section h1')).getText();
    }

    getErrorMsg() {
      return  element(by.css('.input-group span')).getText();
    }


}