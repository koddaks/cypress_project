class SignInPage {


  businessEmailField() { return cy.get('div[class*="TextField__InputWrapper-sc"] input[name="email"]');}
  passwordField() { return cy.get('input[type="password"]');}
  rememberEmailCheckBox() { return cy.get('svg[data-prefix="far"]');}
  logInBtn() {return cy.get('button[class*="LoginForm__LoginButton"]')}
  errorMessage() {return cy.get('span[class*="Message__MessageCopy-sc-1lbs5ge-2 ilxvtf"]')}

  authorization(email, password){
    this.businessEmailField().type(email);
    this.passwordField().type(password);
    this.rememberEmailCheckBox().click();
    this.logInBtn().click();
    cy.wait(2000);
  }
 
  
}

export default SignInPage
