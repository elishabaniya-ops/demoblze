import {test,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { TestConfig } from '../test.config';

let config: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;   

test.beforeEach(async ({page})=>{
    config = new TestConfig();
    await page.goto(config.appUrl);
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);    
});

test.afterEach(async ({page})=>{
    await page.close();
});

test("User login test @master @sanity @regression", async ({page})=> {
    await homePage.clickLoginLink();
    await loginPage.setEmail(config.email);
    await loginPage.setPassword(config.password);
    await loginPage.clickLogin();

    //test

    // await expect(loginPage.getLoginErrorMessage()).toBeNull();
});