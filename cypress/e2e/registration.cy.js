describe("New user registration flow", () => {
  const name = "Vasiliy";
  const lastName = "Pupkin";
  const password = "Password123";
  let randomEmail;

  beforeEach(() => {
    randomEmail = generateRandomEmail();
  })

  it("Successful registration", () => {
    cy.visit("https://guest:welcome2qauto@qauto2.forstudy.space/");
    cy.get(".hero-descriptor_btn").contains("Sign up").click();

    cy.get('input[name="name"]').type(name).should('have.value', name);
    cy.get('input[name="lastName"]').type(lastName).should('have.value', lastName);
    cy.get('input[name="email"]').type(randomEmail).should('have.value', randomEmail);
    cy.get('input[name="password"').type(password).should('have.value', password);
    cy.get('input[name="repeatPassword"]').type(password).should('have.value', password);

    cy.contains("button", "Register").click();
    cy.url().should("include", "qauto2.forstudy.space/panel/garage");

    cy.get("#userNavDropdown").click();
    cy.get('[routerlink="/panel/profile"]').click();
    cy.get('.profile_name').should('contain.text', 'Vasiliy');
  });
});

function generateRandomEmail() {
  const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  let email = "";
  for (let i = 0; i < 15; i++) {
    email += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return email + "@example.com";
}
