export class BasePage {
  footer() {
    return cy.xpath(
      `//div[@class="row d-flex flex-column flex-md-row align-items-center"]`
    );
  }

  userNavDropdown() {
    return cy.xpath(`//button[@id='userNavDropdown']`);
  }

  profileLink() {
    return cy.xpath(`//a[@routerlink="/panel/profile"]`);
  }

  profileName() {
    return cy.xpath(`//p[contains(@class, 'profile_name')]`);
  }

  logoutLink() {
    return cy.xpath(`//button[text()='Logout']`);
  }

  signUpButton() {
    return cy.xpath(`//button[@class="hero-descriptor_btn btn btn-primary"]`);
  }

  nameInput() {
    return cy.xpath(`//input[@name="name"]`);
  }

  lastNameInput() {
    return cy.xpath(`//input[@name="lastName"]`);
  }

  emailInput() {
    return cy.xpath(`//input[@name="email"]`);
  }

  passwordInput() {
    return cy.xpath(`//input[@name="password"]`);
  }

  repeatPasswordInput() {
    return cy.xpath(`//input[@name="repeatPassword"]`);
  }

  registerButton() {
    return cy.xpath(`//button[contains(text(), "Register")]`);
  }

  clickSignUpButton() {
    this.signUpButton().click();
  }

  fillRegistrationForm(name, lastName, email, password) {
    this.nameInput().type(name);
    this.lastNameInput().type(lastName);
    this.emailInput().type(email);
    this.passwordInput().type(password);
    this.repeatPasswordInput().type(password);
  }

  validateSuccessfulRegistration(name, lastName) {
    cy.url().should(`include`, `qauto2.forstudy.space/panel/garage`);
    this.userNavDropdown().click();
    this.profileLink().click();
    this.profileName().should(`contain.text`, `${name} ${lastName}`);
  }

  submitRegistrationForm() {
    this.registerButton().click();
  }

  clickUserNavDropdown() {
    this.userNavDropdown().click();
  }

  logout() {
    this.clickUserNavDropdown();
    this.logoutLink().click();
  }
}
