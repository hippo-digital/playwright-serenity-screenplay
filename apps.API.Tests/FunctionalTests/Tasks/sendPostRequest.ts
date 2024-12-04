import { Task } from '@serenity-js/core';
import { PostRequest, Send } from '@serenity-js/rest';

// Retrieve the base API URL from environment or config
const API_BASE_URL = process.env.API_BASE_URL || 'https://my-json-server.typicode.com/typicode/demo/';

export const sendPostRequest = (path: string, payload: object) =>
    Task.where(`#actor sends a POST request to ${API_BASE_URL}${path}`,
        Send.a(PostRequest.to(`${API_BASE_URL}${path}`).with(payload)) // Concatenate the base URL with the path and include the payload
    );
