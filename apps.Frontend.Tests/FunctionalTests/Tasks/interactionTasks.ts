import { Interaction, Task, Actor } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import {CareersPage, HomePage} from '../pages';
import {isCookiesBannerVisible, isViewOurVacanciesButtonVisible} from "../Questions/pageElements";

const ClickAcceptCookiesIfVisible = () =>
    Interaction.where(`Click on accept cookies if the banner is visible`, async (actor: Actor) => {
        console.log('Checking if the cookies banner is visible...');

        const isVisible = await isCookiesBannerVisible().answeredBy(actor);
        if (isVisible) {
            console.log('Cookies banner is visible. Attempting to click the accept button...');
            const acceptButton = await HomePage.cookiesAcceptButton().answeredBy(actor);

            await actor.attemptsTo(Click.on(acceptButton));
            console.log('Clicked on the cookies accept button.');
        } else {
            console.log('Cookies banner is not visible. Skipping click.');
        }
    });

// Use the Interaction within Task.where, now as a synchronous definition
export const acceptCookiesIfVisible = () =>
    Task.where(
        'I accept the cookies if the banner is visible after navigating to the homepage',
        ClickAcceptCookiesIfVisible() 
    );

export const NavigateAndViewVacancies = () =>
    Task.where(`Navigate to the careers page and click 'View our vacancies' if visible`,
        // Wait until the button is visible
        Interaction.where('Check visibility of View our vacancies button', async actor => {
            const isVisible = await isViewOurVacanciesButtonVisible().answeredBy(actor);
            if (isVisible) {
                console.log('Vacancies button is visible. Proceeding to click.');
            } else {
                console.log('Vacancies button not visible.');
            }
        }),
        // Click the "View our vacancies" button
        Click.on(CareersPage.viewOurVacanciesButton())
    );