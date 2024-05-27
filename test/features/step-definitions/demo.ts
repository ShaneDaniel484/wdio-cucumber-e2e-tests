import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
  await browser.maximizeWindow();
  browser.pause(5000);
  console.log(`After opening browser>>`);
  //console.log(`browserObj>> ${JSON.stringify(browser)}`);
});

When(/^Search with (.*)$/, async function (SearchItem) {
  console.log(SearchItem);
  let ele = await $(`[name=q]`);
  await ele.setValue(SearchItem);
  await browser.keys("Enter");
  //console.log(`elementObj>> ${JSON.stringify(ele)}`);
});

Then(/^Click on first search result$/, async function () {
  let ele = await $(`<h3>`);
  ele.click();
});

Then(/^URL should match (.*)$/, async function (ExpectedURL) {
  console.log(`>>ExpectedURL: ${ExpectedURL}`);
  await browser.waitUntil(async function (){
    return await browser.getTitle() == "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
  },{timeout:20000 , interval : 500 ,timeoutMsg: `Failed to load WDIO webpage ${await browser.getTitle()}`})
  let URL = await browser.getUrl();
  console.log(`>>currentURL: ${URL}`);
  expect(URL).to.equal(ExpectedURL);
});

// WEB INTERACTIONS
Given(/^a web page is opened$/, async function () {
  await browser.url("https://www.amazon.in/");
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

  /**
   * 5.FILE UPLOAD
   */
  // await $(`#file-upload`).addValue(`${process.cwd()}/data/fileUpload/dummy.txt`)
  // await $(`#file-submit`).click()

  /**
   * 6.FRAMES
   * methods:
   * 1.switchToFframe()
   * 2.switchToParentFrame()
   */

  // await $(`=iFrame`).click();
  // let ele = await $(`#mce_0_ifr`);
  // await browser.switchToFrame(ele);
  // await $(`#tinymce`).setValue(`Typing in iframe`);
  // await browser.switchToParentFrame();

  /**
   * 7.KEY PRESS
   */

  // await $(`=iFrame`).click();
  // let ele = await $(`#mce_0_ifr`);
  // await browser.switchToFrame(ele);
  // await $(`#tinymce`).click();
  // await browser.keys(["meta", "A"]);
  // await browser.keys("Delete");
  // await $(`#tinymce`).addValue(`Typing in iframe`);
  // await browser.switchToParentFrame();

  /**
   * 8.BASIC SCROLLING
   * methods:
   * 1.scrollIntoView()
   */

  //await $(`span=Bestsellers in Women's Indian Clothing`).scrollIntoView();
  //give false to scroll upto above the element
  //await $(`span=Bestsellers in Women's Indian Clothing`).scrollIntoView(false);

  /**
   * WEB TABLES
   * 1.Check number of rows and columns
   * 2.get whole table data
   * 3.get single row (based on a condition)
   * 4.get single column
   * 5.get single cell value (based on another cell)
   */

  //  1.Check number of rows and columns
  // let tableRowCount = await $$(`//table[@id="table1"]/tbody/tr`).length;
  // expect(tableRowCount).to.equal(4);
  // console.log(`>>No of Rows: ${tableRowCount}`);
  // let tableColCount = await $$(`//table[@id="table1"]/thead/tr/th`).length;
  // expect(tableColCount).to.equal(6);
  // console.log(`>>No of Columns: ${tableColCount}`);

  // 2.get whole table data
  // let tableArr = [];
  // for (let i = 0; i < tableRowCount; i++) {
  //   let personObj = {
  //     lastname: "",
  //     firstname: "",
  //     email: "",
  //     due: "",
  //     webSite: ""
  //   };
  //   for (let j = 0; j < tableColCount; j++) {
  //     let cellVal =await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[${j+1}]`).getText();
  //     //console.log(`>>Cell Value: ${cellVal}`);
  //     if(j === 0) personObj.lastname = cellVal;
  //     if(j === 1) personObj.firstname = cellVal;
  //     if(j === 2) personObj.email = cellVal;
  //     if(j === 3) personObj.due = cellVal;
  //     if(j === 4) personObj.webSite = cellVal;
  //   }
  //   tableArr.push(personObj);
  // }
  // console.log(`>> WHOLE TABLE DATA: ${JSON.stringify(tableArr)}`);

  // 3.get single row (based on a condition)
  //condition : display jason's details

  // let tableArr = [];
  // for (let i = 0; i < tableRowCount; i++) {
  //   let personObj = {
  //     lastname: "",
  //     firstname: "",
  //     email: "",
  //     due: "",
  //     webSite: "",
  //   };
  //   for (let j = 0; j < tableColCount; j++) {
  //     let cellVal = await $(
  //       `//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`
  //     ).getText();
  //     let firstname = await (
  //       await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`)
  //     ).getText();
  //     if (firstname === "Jason") {
  //       if (j === 0) personObj.lastname = cellVal;
  //       if (j === 1) personObj.firstname = cellVal;
  //       if (j === 2) personObj.email = cellVal;
  //       if (j === 3) personObj.due = cellVal;
  //       if (j === 4) personObj.webSite = cellVal;
  //     }
  //   }
  //   if (personObj.firstname) {
  //     tableArr.push(personObj);
  //   }
  // }
  // console.log(`>> jason's data: ${JSON.stringify(tableArr)}`);

  // 4.get single column
  // let singleArr = [];
  // for (let i = 0; i < tableRowCount; i++) {
  //   let cellVal =await $(`//table[@id="table1"]/tbody/tr[${i+1}]/td[4]`).getText();
  //   singleArr.push(cellVal);
  // }
  //   console.log(`>>Single column: ${singleArr}`);

  // 5.get single cell value (based on another cell)
  // let singleCol = [];
  // for (let i = 0; i < tableRowCount; i++) {
  //     let due = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`).getText();
  //     let firstname = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`).getText();
  //     if (+(due.replace("$","")) > 50) {
  //       singleCol.push(firstname);
  //     }
    
  // }
  // console.log(`>>Single column : ${singleCol}`);


  /**ADVANCED SCROLLING
   * VIsible portion
   * Windows object
   * 1.scrollBY
   *  Y -> [-]window.inerheight
   */

  //scroll down
  // await browser.execute(()=>{
  //   window.scrollBy(0,window.innerHeight)
  // })

  // await browser.pause(2000)

  // //scroll up
  // await browser.execute(()=>{
  //   window.scrollBy(0, -window.innerHeight)
  // })

  /**
   * INVISIBLE PORTION
   * windows object
   * 1.ScrollTo
   * Y -> document.body.scrollTop[Scrollheight]
   */

  // await browser.execute(()=>{
  //   window.scrollTo(0, document.body.scrollHeight)
  // })





  //await browser.debug();
});
