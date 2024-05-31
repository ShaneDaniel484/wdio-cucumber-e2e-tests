import { Given } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^user is logged in sauce labs$/, async function () {
    // 1. Open inventory app
    // @ts-ignore

  console.log(`>>TEST ID : ${this.testID}`);
  //@ts-ignore
  await browser.url(browser.options.sauseDemoUrl);
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
  //console.log(`>> TEST CONFIG VALUES : ${JSON.stringify(browser.options)}`);

  //2. Login to inventory app
  console.log(`>> TEST_STD_USERNAME : ${process.env.Test_STD_USERNAME}`);
  await $(`#user-name`).setValue(process.env.Test_STD_USERNAME)
  await $(`#password`).setValue(process.env.Test_STD_PASSWORD)
  await $(`#login-button`).click()
  await browser.pause(2000)
  
  //await browser.debug();

  //log in with another user
  // await browser.reloadSession()
  // await browser.url("https://www.saucedemo.com/v1/");
  // await $(`#user-name`).setValue("problem_user")
  // await $(`#password`).setValue("secret_sauce")
  // await $(`#login-button`).click()
  // await browser.debug()


  //try catch
  // try {
  //   await $(`#user-nam`).setValue("standard_user")
  //   await $(`#password`).setValue("secret_sauce")
  //   await $(`#login-button`).click()
  //   await browser.pause(2000)
  // } catch (err) {
  //   await browser.refresh()
  //   console.log(`User not logged in....RETRYING....`);
  //   await $(`#user-name`).setValue("standard_user")
  //   await $(`#password`).setValue("secret_sauce")
  //   await $(`#login-button`).click()
  // }
  

  //back and forward

  await browser.back()
  await browser.pause(2000)
  await browser.forward()
 // await browser.debug()
  this.appid = "ID001"

});
