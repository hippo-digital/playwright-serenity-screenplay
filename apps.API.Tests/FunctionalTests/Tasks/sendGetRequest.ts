import { Task } from '@serenity-js/core';
import { GetRequest, Send } from '@serenity-js/rest';
import { Actor } from '@serenity-js/core';

// Retrieve the base API URL from environment or config
const API_BASE_URL = process.env.API_BASE_URL || 'https://my-json-server.typicode.com/typicode/demo/';

export const sendGetRequest = (path: string) =>
    Task.where(`#actor sends a GET request to ${API_BASE_URL}${path}`,
        Send.a(GetRequest.to(`${API_BASE_URL}${path}`)) 
    );
