import { Browser, Page } from "playwright";
import qawolf from "qawolf";

let browser: Browser;
let page: Page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("create-todo", async () => {
  await page.goto("http://localhost:3000/");
  await page.click('[data-hook="wsr-input"]');
  await page.press('[data-hook="wsr-input"]', "CapsLock");
  await page.type('[data-hook="wsr-input"]', "Some tests");
  await page.press('[data-hook="wsr-input"]', "Enter");
  await page.click('[data-hook="checkbox-children"]');
  await page.click('[data-hook="checkbox-children"]');
  await page.click('css=[data-hook="page-scrollable-content"] >> text=Some tests');
});