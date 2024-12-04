import { devices } from '@playwright/test';
import type { PlaywrightTestConfig } from '@serenity-js/playwright-test';
import dotenv from 'dotenv';

// Load environment variables from .env file if available
dotenv.config();

// Define environment variable for the spec directory
const FRONTEND_SPEC_DIR = process.env.FRONTEND_SPEC_DIR || './apps.Frontend.Tests/FunctionalTests/Tests';
const API_SPEC_DIR = process.env.API_SPEC_DIR || './apps.API.Tests/FunctionalTests/Tests';


const BASE_URL = 'https://hippodigital.co.uk';
const API_BASE_URL = process.env.API_BASE_URL || 'https://my-json-server.typicode.com/typicode/demo/'; // Default to the given URL if not set

console.log('API Base URL:', API_BASE_URL); // Log to verify

console.log('FRONTEND_SPEC_DIR:', FRONTEND_SPEC_DIR);
console.log('Base URL:', BASE_URL);
console.log('API Base URL:', API_BASE_URL);

const config: PlaywrightTestConfig = {
    timeout: 30_000,
    expect: {
        timeout: 20000,
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [
        ['line'],
        ['html', { open: 'never' }],
        ['@serenity-js/playwright-test', {
            crew: [
                '@serenity-js/console-reporter',
                ['@serenity-js/serenity-bdd', { specDirectory: FRONTEND_SPEC_DIR }],
                ['@serenity-js/core:ArtifactArchiver', { outputDirectory: './test-results/serenity/frontend' }],
            ],
        }],
    ],
    use: {
        baseURL: BASE_URL, 
        headless: true,
        defaultActorName: 'Alice',
        crew: [
            ['@serenity-js/web:Photographer', { strategy: 'TakePhotosOfFailures' }],
        ],
        actionTimeout: 30000,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure', // Captures screenshots on failure
        video: 'retain-on-failure', // Retains videos on failure (optional)
    },
    projects: [
        {
            name: 'frontend',
            testDir: FRONTEND_SPEC_DIR,
            use: {
                ...devices['Desktop Chrome'],
                baseURL: BASE_URL,
            },
        },

        {
            name: 'api',
            testDir: API_SPEC_DIR,
            use: {
                    baseURL: API_BASE_URL,
                    defaultActorName: 'Bob', // New actor for API tests
                    crew: [
                        ['@serenity-js/core:ArtifactArchiver', { outputDirectory: './test-results/serenity/api' }],
                    ],
                    headless: true,
                    screenshot: 'off', // Disable screenshots for API tests
                    video: 'off', // Disable video recording for API tests
            },
         },
        
    ],
};

export default config;
