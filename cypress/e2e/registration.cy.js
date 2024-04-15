describe('New user registration flow', () => {
  it('Successful registration', () => {
    cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/')
    cy.get('.hero-descriptor_btn').contains('Sign up').click();

    const randomEmail = generateRandomEmail()
    const name = 'Vasiliy'
    const lastName = 'Pupkin'
    const password = 'Password123'

    cy.get('input[name="name"]').type(name)
    cy.get('input[name="lastName"]').type(lastName)
    cy.get('input[name="email"]').type(randomEmail)
    cy.get('input[name="password"').type(password)
    cy.get('input[name="repeatPassword"]').type(password)

    cy.contains('button', 'Register').click()
    cy.url().should('include', 'qauto2.forstudy.space/panel/garage')
    
    cy.get('#userNavDropdown').click();
    cy.get('[routerlink="/panel/profile"]').click();
    cy.contains(name || lastName)
  })
})

function generateRandomEmail() {
  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890'
  let email = ''
  for (let i = 0; i < 15; i++) {
    email += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return email + '@example.com';
}