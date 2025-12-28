import{Page, Locator} from '@playwright/test';

export class LoginPage {
    private readonly page: Page;

    //Locators
    private readonly txtEmail: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly msgLoginError: Locator;

    //Constructor
    constructor(page: Page) {
        this.page = page;

        this.txtEmail = page.locator("#Email");
        this.txtPassword = page.locator("#Password");
        this.btnLogin = page.locator("//input[@value='Log in']");
        this.msgLoginError = page.locator(".validation-summary-errors");
    }

    //methods

    async setEmail(email: string) : Promise<void> {
        await this.txtEmail.fill(email);
    }

    async setPassword(password: string) : Promise<void> {
        await this.txtPassword.fill(password);
    }

    async clickLogin() : Promise<void> {
        await this.btnLogin.click();
    }

    async login(email: string, password: string){
        await this.setEmail(email);
        await this.setPassword(password);
        await this.clickLogin();
    }

    async getLoginErrorMessage() : Promise<null | string> {
        return(this.msgLoginError.textContent());

    }
}   