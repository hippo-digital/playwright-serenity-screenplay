import { By, Click, PageElement } from '@serenity-js/web';
import { Actor } from "@serenity-js/core";

export class HomePage {
    static getInTouchLink = () =>
        PageElement.located(By.css('a.side-link[href="https://hippodigital.co.uk/get-in-touch/"]'))
            .describedAs('Get in touch link');
    static cookiesAcceptButton = () =>
        PageElement.located(By.css('button.cky-btn.cky-btn-accept[data-cky-tag="accept-button"]'))
            .describedAs('Cookies Accept Button');

    static cookiesBanner = () =>
        PageElement.located(By.css('div.cky-notice-btn-wrapper[data-cky-tag="notice-buttons"]'))
            .describedAs('Cookies banner');
    
}
