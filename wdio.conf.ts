import type { Options } from '@wdio/types';
import dotenv from 'dotenv';
dotenv.config();

const headless = process.env.HEADLESS?.toUpperCase() === 'Y';
const debug = process.env.DEBUG?.toUpperCase() === 'Y';

export const config: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true,
        },
    },
    specs: [
        `${process.cwd()}/test/features/**/*.feature`,
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [
        {
            maxInstances: 3,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: headless 
                    ? ['--disable-web-security', '--headless', '--disable-dev-shm-usage', '--no-sandbox', '--window-size=1920,1080'] 
                    : [],
            },
            acceptInsecureCerts: true,
            timeouts: { implicit: 15000, pageLoad: 20000, script: 30000 },
        },
    ],
    logLevel: debug ? 'info' : 'error',
    bail: 0,
    baseUrl: 'https://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        // Uncomment and configure your services here
    ],
    framework: 'cucumber',
    reporters: [['allure', { outputDir: 'allure-results' }]],
    cucumberOpts: {
        require: ['./test/features/step-definitions/*.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 300000,
        ignoreUndefinedDefinitions: false,
    },
    afterStep: async function (step, scenario, result, context) {
        // console.log(`>>step : ${JSON.stringify(step)}`);
        // console.log(`>>scenario : ${JSON.stringify(scenario)}`);
        // console.log(`>>result : ${JSON.stringify(result)}`);
        if (!result.passed) {
            await browser.takeScreenshot();
        }
    },
};
