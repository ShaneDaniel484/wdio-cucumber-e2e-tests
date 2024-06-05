import { Then } from "@wdio/cucumber-framework";
import { expect } from "chai";

Then(/^user sees (.*) products listed$/, async function (NoOfProducts) {
  console.log(`>> then step test id: ${this.testID}`);
  console.log(`>> The Appid: ${this.appid}`);
  //throw Error(` :( `)
  if (!NoOfProducts) throw Error(`Invalid number provided :${NoOfProducts}`);
  let eleArr = await $$(`.inventory_item_name`);
  expect(eleArr.length).to.equal(parseInt(NoOfProducts));
  console.log(`Number of products>> : ${eleArr.length}`);
});

Then(/^user validates the products have valid price$/, async function () {
  /**
   * Steps:
   * 1.Get price list
   * 2.Convert string to number
   * 3.assert if an value is <=0
   */
  //1.Get price list
  let eleArr = await $$(`.inventory_item_price`);
  let priceStrArr = [];
  for (let i = 0; i < eleArr.length; i++) {
    let priceStr = await eleArr[i].getText();
    priceStrArr.push(priceStr);
  }
  console.log(`>>Price in string: ${priceStrArr}`);

  //2.Convert string to number
  let priceNumArr = priceStrArr.map((ele) => parseFloat(ele.replace("$", "")));
  console.log(`>>Price in number: ${priceNumArr}`);

  //3.assert if an value is <=0
  let invalidPriceArr = priceNumArr.filter((ele) => ele <= 0);
  expect(invalidPriceArr.length).to.equal(0);
});
