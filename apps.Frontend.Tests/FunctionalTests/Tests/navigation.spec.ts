import { describe, it } from '@serenity-js/playwright-test';
import {navigateToHomePage, navigateToCareersPage, navigateToGetInTouchPage} from '../Tasks/navigateTasks';
import {
    isCookiesBannerVisible,
    isGetInTouchLinkVisible, isSearchJobButtonVisible,
    isViewOurVacanciesButtonVisible
} from '../Questions/pageElements';
import { Ensure, equals } from '@serenity-js/assertions';
import { HomePage } from "../Pages";
import { acceptCookiesIfVisible, NavigateAndViewVacancies } from "../Tasks/interactionTasks";
import {Duration, Wait} from "@serenity-js/core";

describe('Hippodigital Website Navigation', () => {

    it('should navigate to the Careers page and display the Header and the button - Search Jobs Button is Visible', async ({ actor }) => {
        await actor.attemptsTo(
            navigateToCareersPage(),
            Wait.for(Duration.ofSeconds(3)),
            acceptCookiesIfVisible(),
            Wait.until(isViewOurVacanciesButtonVisible(), equals(true)),
            NavigateAndViewVacancies(),
            Wait.until(isSearchJobButtonVisible(), equals(true)),
            Ensure.that(isSearchJobButtonVisible(), equals(false))  
        );
    });

    it('should display the Get in Touch link on the home page', async ({ actor }) => {
        await actor.attemptsTo(
            navigateToGetInTouchPage(),
            Wait.until(isCookiesBannerVisible(),equals(true)),
            acceptCookiesIfVisible(),
            // Wait for the "Get in Touch" link to be visible
            Wait.until(isGetInTouchLinkVisible(), equals(true)),
            Ensure.that(isGetInTouchLinkVisible(), equals(true))  // Assert the link is visible
        );
    });
});
