import { setWorldConstructor } from "@wdio/cucumber-framework";
import { expect } from "chai";

class CustomWorld{
    appid: string
    constructor(){
        this.appid = ""
    }
}

setWorldConstructor(CustomWorld)