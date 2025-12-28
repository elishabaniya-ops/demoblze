import {Page,expect,Locator} from '@playwright/test';

export class HomePage {
    private readonly page: Page;

    //locators
    private readonly lnklogin: Locator;
    private readonly lnkRegister: Locator;
    private readonly txtSearchBox: Locator;
    private readonly btnSearch: Locator;    
    
    //constructor
    constructor(page: Page) {
        this.page = page;

        this.lnklogin = page.locator("a:has-text('Log in')");
        this.lnkRegister = page.locator("a:has-text('Register')");
        this.txtSearchBox = page.locator("//input[@id='small-searchterms']");
        this.btnSearch = page.locator('.button-1.search-box-button');
    }

    //methods
    async isHomePageExists() {
        let title = await this.page.title();
        if(title)
        {
            return true;
        }
        return false;
    }

    //click on login link
    async clickLoginLink() {
        try {
        await this.lnklogin.click();
        } catch (error) {
            console.error("Error clicking on login link: ", error);
        }
    }

    //click on register link
    async clickRegisterLink() {
        try {
        await this.lnkRegister.click();
        } catch (error) {
            console.error("Error clicking on register link: ", error);
        }
    }

    //Enter product name in search box
    async enterProductName(pName: string) {
        try {
            await this.txtSearchBox.fill(pName);
        }
        catch (error) {
            console.error("Error entering product name in search box: ", error);
        }
    }

    async clickSearchButton() {
        try {
            await this.btnSearch.click();
        }
        catch (error) {
            console.error("Error clicking on search button: ", error);
        }
    }
}