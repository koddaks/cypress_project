class SignUpPage {
  workEmailField() { return cy.get('input[id="email"]');}
  fullNameField() { return cy.get('input[id="full_name"]');}
  passwordField() { return cy.get('input[id="password"]');}
  agreeTermsCheckBox() { return cy.get('div[aria-labelledby="terms-label"] rect');}
  recievEmailsChechBox() {return cy.get('div[style="position:relative"] div[class*="jSawLe"] rect');}
  submitBtn() {return cy.get('button[type="submit"]');}
  emailErrorMessage() {return cy.get('div [id="email_error"]')}
  errorMessage() {return cy.get('span[class="sc-570b157-1 eUoKGn"]')}
  
  registration(email, name, password){
    this.workEmailField().type(email);
    this.fullNameField().type(name);
    this.passwordField().type(password);
    this.agreeTermsCheckBox().click();
    this.recievEmailsChechBox().click();
    this.submitBtn().click();
    cy.wait(15000);
  }
}

export default SignUpPage
