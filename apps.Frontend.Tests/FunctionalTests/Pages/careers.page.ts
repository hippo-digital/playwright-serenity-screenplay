import { By, PageElement } from '@serenity-js/web';

export class CareersPage {
    static header = () =>
        PageElement.located(By.css('h3.subtitle[aria-label="Careers at Hippo"]'))
            .describedAs('Careers at Hippo header');

    static viewOurVacanciesButton = () =>
        PageElement.located(By.css('div.bottom > a.link[href="https://careers.hippodigital.co.uk/vacancies/vacancy-search-results.aspx"]'))
            .describedAs('View our vacancies button');

    static viewSearchJobButton = () =>
        PageElement.located(By.id('ctl00_ContentContainer_TopSearch_btnSearch'))
            .describedAs('Search Jobs button');


}
