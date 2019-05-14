import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  geturl() {
    return browser.getCurrentUrl();
  }
}
