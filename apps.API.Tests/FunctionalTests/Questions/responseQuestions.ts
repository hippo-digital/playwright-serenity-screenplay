import { Question } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';

// responseStatus returns a Question<Promise<number>> directly
export const responseStatus = (): Question<Promise<number>> =>
    LastResponse.status();

// responseData should return a Question<Promise<object>>
export const responseData = (): Question<Promise<any>> =>
    Question.about('the response data', actor =>
        LastResponse.body<any>()
    )