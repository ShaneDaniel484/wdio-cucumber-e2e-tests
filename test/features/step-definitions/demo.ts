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
  await browser.url("/basic_auth");
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

  //   let num = 12345;
  //   let strNum = num.toString();
  //   let ele = await $(`[type="number"]`);
  //   await ele.click();
  //   // await ele.scrollIntoView();
  //   // await ele.moveTo();
  //   //await ele.setValue("WDIO");
  //   for (let i = 0; i < strNum.length; i++) {
  //     let charStr = strNum.charAt(i);
  //    // await browser.pause(1000);
  //     await browser.keys(charStr);
  //   }

  /**
   * 2.DROPDOWN
   * Actions:
   * 1.Assert default opions is selected
   * 2.Select by sttributr,text,index
   * 3.get a list of options
   */
  //1.
  // let ele = await $(`//select/option[@selected="selected"]`)
  // let val = await ele.getText()
  // expect(val).to.equal("Please select an option")

  //2.
  //  let ddele = await $(`#dropdown`);
  //  await ddele.selectByVisibleText("Option 2")
  //  await ddele.selectByAttribute("value", "2")
  //  await ddele.selectByIndex(2)

  //3.
  // let eleArr = await $$(`select > option`);
  // let arr = [];
  // for (let i = 0; i < eleArr.length; i++) {
  //   let ele = eleArr[i];
  //   let val = await ele.getText();
  //   arr.push(val);
  //   console.log(val);
  // }
  // console.log(`Options list >> ${arr}`);

  /**
   * 3.CHECKBOX
   * Actions:
   * 1.select an option
   * 2.unselecct an option (is felected)
   * 3.Assert if optiion is selected
   * 4.select all options
   */

  //1.
  // let ele = await $(`//form/input[@type="checkbox"][1]`)
  //2.
  // let ele = await $(`//form/input[@type="checkbox"][1]`)
  // if (! await ele.isSelected()) {
  //   await ele.click()
  // }

  //3
  // let ele = await $(`//form/input[@type="checkbox"][2]`)
  // let isChecked = await ele.isSelected()
  // expect(isChecked).to.be.true
  // expect(isChecked).to.be.false

  //4
  // let eleArr = await $$(`//form[@id="checkboxes"]/input`)
  // for (let i = 0; i < eleArr.length; i++) {
  //   let ele = eleArr[i]
  //   if (!await ele.isSelected()) {
  //     await ele.click()
  //   }
  //   else{
  //     await ele.click()
  //   }

  /**
   * 4.WINDOW HANDLING
   * steps:
   * 1.launch the browser
   * 2.open another window
   * 3.switch to the window based on title
   * 4.switch back to the main window
   *
   *
   * METHODS USED
   * 1.getTitle()
   * 2.getWindowHandle()
   * 3.getWindowHandles()
   * 4.switchToWindow()
   */

  // await $(`=Click Here`).click();
  // await $(`=Elemental Selenium`).click();
  // let currentWindowTitle = await browser.getTitle();
  // let parentWindowHandle = await browser.getWindowHandle();
  // console.log(`>>current window title: ${currentWindowTitle}`);

  // //swich to specific window
  // let windowHandles = await browser.getWindowHandles();
  // for (let i = 0; i < windowHandles.length; i++) {
  //   console.log(`>>window handle: ${windowHandles[i]}`);
  //   await browser.switchToWindow(windowHandles[i]);
  //   currentWindowTitle = await browser.getTitle();
  //   if (currentWindowTitle === "Home | Elemental Selenium") {
  //     await browser.switchToWindow(windowHandles[i]);
  //     let headerTxtElementalSel = await $(`<h1>`).getText();
  //     console.log(`>>header text: ${headerTxtElementalSel}`);
  //     //rest of the action goes here
  //     break;
  //   }
  //   //console.log(`>> current window title: ${currentWindowTitle}`);
  // }

  // //swich back to parent window

  // await browser.switchToWindow(parentWindowHandle);
  // let parentHeader = await (await $(`<h3>`)).getText()
  // console.log(`>>parent header text: ${parentHeader}`);

  /**
   * 4. HANDING ALERTS
   * 1. is AlertOpen()
   * 2. acceptAlert()
   * 3. dismissAlert()
   * 4. getAlertText()
   * 5. sendAlertText()
   */

  // await $(`button=Click for JS Prompt`).click();
  // if (await browser.isAlertOpen()) {
  //   //await browser.acceptAlert();
  //   await browser.pause(2000);
  //   //await browser.dismissAlert();
  //   let alertText = await browser.getAlertText();
  //   console.log(`>>alert text: ${alertText}`);
  //   await browser.sendAlertText("sending alert text");
  //   await browser.pause(2000);
  //   await browser.acceptAlert();
  // };

  //basic auth
     // change baseUrl: 'https://admin:admin@the-internet.herokuapp.com',
     



  await browser.debug();
});
