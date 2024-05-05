import { BasePage } from "../pages/BasePage";
import { defaultUser, generateRandomEmail } from "../testData/userData"; 

describe("New user registration flow", () => {
  const basePage = new BasePage();
  let randomEmail;

  beforeEach(() => {
    randomEmail = generateRandomEmail();
    cy.visit("https://guest:welcome2qauto@qauto2.forstudy.space/");
  });

  it("Successful registration", () => {
    basePage.clickSignUpButton();
    basePage.fillRegistrationForm(defaultUser.name, defaultUser.lastName, randomEmail, defaultUser.password);
    basePage.submitRegistrationForm();
    basePage.validateSuccessfulRegistration(defaultUser.name, defaultUser.lastName);
  });

  afterEach(() => {
    basePage.logout();
  });
});
