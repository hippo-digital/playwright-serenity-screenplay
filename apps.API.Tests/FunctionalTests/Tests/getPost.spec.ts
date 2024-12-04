import { beforeAll, describe, it } from '@serenity-js/playwright-test';
import { actorCalled } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';
import { Ensure, equals } from '@serenity-js/assertions';
import { sendPostRequest } from '../Tasks/sendPostRequest';
import { sendGetRequest } from '../Tasks/sendGetRequest';
import { responseStatus, responseData } from "../Questions/responseQuestions";

describe('API tests for JSON Server', () => {

    beforeAll(() => {
        actorCalled('API Actor').whoCan(CallAnApi.at(process.env.PLAYWRIGHT_API_BASE_URL!));
    });

    it('should successfully fetch posts', async ({ actor }) => {
        await actor.attemptsTo(
            sendGetRequest('posts'),
            Ensure.that(responseStatus(), equals(200))  // Expecting status 200
            );
    });

    it('should successfully create a post', async ({ actor }) => {
        const payload = { id: 4, title: 'New Post' };

        await actor.attemptsTo(
            sendPostRequest('posts', payload),
            Ensure.that(responseStatus(), equals(201)),  // Expecting status 201
        );

        // Ensure the response data equals the payload, this time we resolve the Question properly
        const body = await responseData().answeredBy(actor); // resolve the question first

        Ensure.that(body, equals(payload));  // Now compare the resolved body to the expected payload
    });
});
