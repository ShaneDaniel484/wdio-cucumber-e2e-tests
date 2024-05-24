import { Given } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^user is logged in sauce labs$/, async function () {
    // 1. Open inventory app
  await browser.url("https://www.saucedemo.com/v1/");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();

  //2. Login to inventory app
  await $(`#user-name`).setValue("standard_user")
  await $(`#password`).setValue("secret_sauce")
  await $(`#login-button`).click()
  
  //await browser.debug();
});
