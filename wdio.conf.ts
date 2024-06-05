

import { World } from '@wdio/cucumber-framework';
import type { Options } from '@wdio/types';
import dotenv from 'dotenv';
import allure from "@wdio/allure-reporter"
dotenv.config();

const headless = process.env.HEADLESS?.toUpperCase() === 'Y';
const debug = process.env.DEBUG?.toUpperCase() === 'Y';

export const config: Options.Testrunner = {
  runner: "local",
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: "./tsconfig.json",
      transpileOnly: true,
    },
  },
  specs: [`${process.cwd()}/test/features/**/*.feature`],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 3,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: headless
          ? [
              "--disable-web-security",
              "--headless",
              "--disable-dev-shm-usage",
              "--no-sandbox",
              "--window-size=1920,1080",
            ]
          : [],
      },
      acceptInsecureCerts: true,
      timeouts: { implicit: 15000, pageLoad: 20000, script: 30000 },
    },
  ],
  logLevel: debug ? "info" : "error",
  bail: 0,
  baseUrl: "https://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    // Uncomment and configure your services here
  ],
  framework: "cucumber",
  reporters: [["allure", 
  { outputDir: "allure-results" ,
    disableWebdriverStepsReporting: true,
    useCucumberStepReporter: true
  }
]
],
  cucumberOpts: {
    require: ["./test/features/step-definitions/*.ts"],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    name: [],
    snippets: true,
    source: true,
    strict: false,
    tagExpression: "",
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
  beforeScenario: async function (world) {
    let arr = world.pickle.name.split(/:/);

    if (arr.length > 0) {
      //@ts-ignore
      browser.options.testID = arr[0];
    }
  },

  afterFeature: function(uri , feature){
    allure.addEnvironment("Environment: ", browser.config.environment)
  },
};
