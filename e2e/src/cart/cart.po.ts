import { browser, by, element } from 'protractor';

export class CartPage {

    navigateTo() {
        browser.get('/cart');
    }

    getParaText() {
        let p = element.all(by.tagName('i')).get(0);
        return p.getText();
    }

} 