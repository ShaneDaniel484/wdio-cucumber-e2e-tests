import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
  browser.pause(5000);
});

When(/^Search with (.*)$/, async function (SearchItem) {
  console.log(SearchItem);
  let ele = await $(`[name=q]`);
  await ele.setValue(SearchItem);
  await browser.keys("Enter");
});

Then(/^Click on first search result$/, async function () {
  let ele = await $(`<h3>`);
  ele.click();
});

Then(/^URL should match (.*)$/, async function (ExpectedURL) {
  console.log(`>>ExpectedURL: ${ExpectedURL}`);
  let URL = await browser.getUrl();
  console.log(`>>currentURL: ${URL}`);
  expect(URL).to.equal(ExpectedURL);
});

// WEB INTERACTIONS
Given(/^a web page is opened$/, async function () {
  await browser.url("/inputs");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^perform web interactions$/, async function () {
  /** 1.input box 
   * Action:
    1.Type into input box 
    2.clear the field and type or just add value
    3.click and type
    4.slow typing
   */
  let num = 12345;
  let strNum = num.toString();
  let ele = await $(`[type="number"]`);
  await ele.click();
  // await ele.scrollIntoView();
  // await ele.moveTo();
  //await ele.setValue("WDIO");
  for (let i = 0; i < strNum.length; i++) {
    let charStr = strNum.charAt(i);
   // await browser.pause(1000);
    await browser.keys(charStr);
  }
  await browser.debug();
});
