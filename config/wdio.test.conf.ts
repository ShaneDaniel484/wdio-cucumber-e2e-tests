import {config as baseConfig} from "../wdio.conf.ts"
export const config = Object.assign(baseConfig,{
    //all test environment specific key value pairs
    environment : "test",
    sauseDemoUrl: "https://www.saucedemo.com/v1"
})