import {By, PageElement } from '@serenity-js/web';

export class SearchPage {
    static searchInput = () =>
        PageElement.located(By.css('input[name="q"]')).describedAs('search input box');
    static searchButton = () =>
        PageElement.located(By.css('button[type="submit"]')).describedAs('search button');
}
