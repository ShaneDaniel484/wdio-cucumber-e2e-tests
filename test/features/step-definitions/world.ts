import { setWorldConstructor } from "@wdio/cucumber-framework";
import { expect } from "chai";

class CustomWorld{
    appid: string
    testID: string
    constructor(){
        this.appid = ""
        this.testID = ""
    }
}

setWorldConstructor(CustomWorld)