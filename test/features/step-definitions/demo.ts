import { Given, When, Then } from "@wdio/cucumber-framework";
import {expect} from "chai";
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
