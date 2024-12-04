import {Question, AnswersQuestions, UsesAbilities} from '@serenity-js/core';
import { HomePage, CareersPage } from '../Pages';

export const isGetInTouchLinkVisible = () =>
    Question.about('whether the Get In Touch Link is visible', async (actor: AnswersQuestions & UsesAbilities) => {
        const getInTouchLink = await HomePage.getInTouchLink().answeredBy(actor);
        console.log('Locating Get in touch link...');
        const isVisible = await getInTouchLink.isVisible();
        console.log(`Get in Touch link visibility: ${isVisible}`);
        return getInTouchLink.isVisible();
    });

export const isViewOurVacanciesButtonVisible = () =>
    Question.about('whether the View our vacancies button is visible', async (actor: AnswersQuestions & UsesAbilities) => {
        const viewOurVacanciesButton = await CareersPage.viewOurVacanciesButton().answeredBy(actor);
        return viewOurVacanciesButton.isVisible();
    });

export const isSearchJobButtonVisible = () =>
    Question.about('whether the Search Job button is visible', async (actor: AnswersQuestions & UsesAbilities) => {
        const viewSearchJobButton = await CareersPage.viewSearchJobButton().answeredBy(actor);
        return viewSearchJobButton.isVisible();
    });
export const isCookiesBannerVisible = () =>
    Question.about('whether the cookies banner is visible', async (actor: AnswersQuestions & UsesAbilities) => {
        const banner = await HomePage.cookiesBanner().answeredBy(actor);
        const bannerIsVisible = await banner.isVisible();

        console.log(`Cookies banner visibility: ${bannerIsVisible}`);

        // Check visibility of the accept button as well
        const acceptButton = await HomePage.cookiesAcceptButton().answeredBy(actor);
        const acceptButtonIsVisible = await acceptButton.isVisible();

        console.log(`Cookies Accept Button visibility: ${acceptButtonIsVisible}`);

        return bannerIsVisible;
    });