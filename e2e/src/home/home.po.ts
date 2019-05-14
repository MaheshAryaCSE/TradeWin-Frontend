import { browser, by, element } from 'protractor';

export class HomePage {

    navigateTo() {
        browser.get('/home');
    }

    getTagsCount() {
        return element.all(by.tagName('h3')).count();
    }

    getParaText() {
        let p = element.all(by.css('.setting-rows span')).get(0);
        return p.getText();
    }

   linkExistence(){
    return element(by.linkText('Properties')).isPresent()
   }
} 