import { By, PageElement } from '@serenity-js/web';

export class GetInTouchPage {
    static form = () =>
        PageElement.located(By.css('form#contact-form')).describedAs('the contact form');

    static firstNameField = () =>
        //PageElement.located(By.css('input[name="firstname"]')).describedAs('the first name field');
        PageElement.located(By.css('input#firstname-61183070-0715-4fbb-a427-1a7e5d51d48c'))

    static lastNameField = () =>
        PageElement.located(By.css('input[name="lastName"]')).describedAs('the last name field');

    static emailField = () =>
        PageElement.located(By.css('input[name="email"]')).describedAs('the email field');

    static jobTitleField = () =>
        PageElement.located(By.css('input[name="jobTitle"]')).describedAs('the job title field');

    static phoneNumberField = () =>
        PageElement.located(By.css('input[name="phoneNumber"]')).describedAs('the phone number field');

    static reasonForContactingDropdown = () =>
        PageElement.located(By.css('select[name="reasonForContacting"]')).describedAs('the reason for contacting dropdown');

    static messageField = () =>
        PageElement.located(By.css('textarea[name="message"]')).describedAs('the message field');

    static howDidYouHearAboutUsDropdown = () =>
        PageElement.located(By.css('select[name="howDidYouHearAboutUs"]')).describedAs('the "how did you hear about us" dropdown');

    static consentToRespondCheckbox = () =>
        PageElement.located(By.css('input[name="consentToRespond"]')).describedAs('the consent to respond checkbox');

    static consentToMarketingCheckbox = () =>
        PageElement.located(By.css('input[name="consentToMarketing"]')).describedAs('the consent to marketing checkbox');

    static submitButton = () =>
        PageElement.located(By.css('button[type="submit"]')).describedAs('the submit button');
}

