class MainPage {
  signUpBtnInTopOfPage() { return cy.get('ul[class*="sc-14c941d7-5 dGPYWM sc-14c941d7-7 hhCIhu"] a[href="/sign-up"]');}
 
  logInBtnInTopOfPage() { return cy.get('.sc-ee0ec023-2 > :nth-child(4)')}

  elasticSipTrunkingInDropMenu(){
    return cy.get('div [class="sc-7b3980dc-2 bjOBlW"] a[href="/products/sip-trunks"]');
  }

  smsApiInDropMenu(){
    return cy.get('div [class="sc-7b3980dc-2 bjOBlW"] a[href="/products/sms-api"]');
  }
  aboutTelnyxInDropMenu(){
    return cy.get('li[class="Text-sc-5o8owa-0 sc-7b3980dc-7 czgqGc khahzD"] a[href="/company/about"]');
  }
  blogBtnInDowpPage(){
    return cy.get('[data-e2e="Footer--navItem-resources"] > div > .sc-7b6c9f9b-6 > :nth-child(2) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span');
  }
  

  
}

export default MainPage
