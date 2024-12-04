import { Task } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

export const navigateToHomePage = () =>
    Task.where(`#actor navigates to the home page`,
        Navigate.to(`/`)
    );

export const navigateToCareersPage = () =>
    Task.where(`#actor navigates to the careers page`,
        Navigate.to(`/careers`)
    );

export const navigateToGetInTouchPage = () =>
    Task.where(`#actor navigates to the contact page`,
        Navigate.to(`/get-in-touch`)
    );