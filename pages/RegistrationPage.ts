import {Page,expect,Locator } from '@playwright/test';

export class RegistrationPage {
    private readonly page: Page;

    //locators
    private readonly txtFirstname: Locator;
    private readonly txtLastname: Locator;
    private readonly txtemail: Locator;
    private readonly txtpassword: Locator;
    private readonly txtConfirmPassword: Locator;
    private readonly chkgender: Locator;
    private readonly btnRegister: Locator;
    private readonly msgRegistrationCompleted: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;

        this.txtFirstname = page.locator("#FirstName");
        this.txtLastname = page.locator("#LastName");
        this.txtemail = page.locator("#Email");
        this.txtpassword = page.locator("#Password");
        this.txtConfirmPassword = page.locator("#ConfirmPassword");
        this.chkgender = page.locator("#gender-male");
        this.btnRegister = page.locator("//button[@type='submit' and text()='Register']");
        this.msgRegistrationCompleted = page.locator("div:has-text('Registration completed')");
    }

    //methods
    async setFirstName(fName: string) : Promise<void> {
        await this.txtFirstname.fill(fName);
    }

    async setLastName(lName: string) : Promise<void> {
        await this.txtLastname.fill(lName);
    }   

    async setEmail(email: string) : Promise<void> {
        await this.txtemail.fill(email);
    }

    async setPassword(password: string) : Promise<void> {
        await this.txtpassword.fill(password);
    }

    async setConfirmPassword(password: string) : Promise<void> {
        await this.txtConfirmPassword.fill(password);
    }   

    async clickGender() : Promise<void> {
        await this.chkgender.check();
    }

    async clickRegisterButton() : Promise<void> {
        await this.btnRegister.click();
    }

    async getconfirmationMessage() : Promise<string> {
        return await this.msgRegistrationCompleted.textContent() ?? "";
    }

    async completeRegistration(userData:{
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }) : Promise<void> {
        await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setPassword(userData.password);
        await this.setConfirmPassword(userData.password);
        await this.clickGender();
        await this.clickRegisterButton();
        await expect(this.msgRegistrationCompleted).toBeVisible();
    }
}
