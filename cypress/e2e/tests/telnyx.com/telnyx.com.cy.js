import MainPage from "../../pages/main.page";
import SignUpPage from "../../pages/sign.up";
import SignInPage from "../../pages/sign.in";
import ElasticSipTrunkingPage from "../../pages/elastic.sip.trunking";
import SmsApiPage from "../../pages/sms.api";
import AboutTelnyxPage from "../../pages/about.telnyx";

const mainPage = new MainPage();
const signUpPage = new SignUpPage();
const signInPage = new SignInPage();
const elasticSipTrunkingPage = new ElasticSipTrunkingPage();
const smsApiPage = new SmsApiPage();
const aboutTelnyxPage = new AboutTelnyxPage();

const randomEmail =
  Math.random().toString(36).substring(2, 9) +
  Math.random().toString(36).substring(2, 9);
const randomMail =
  Math.random().toString(36).substring(2, 9) +
  Math.random().toString(36).substring(2, 9);

describe("Sign in: ", () => {
  it("with invalid data /#1", () => {
  cy.viewport(1980, 1080);
  cy.visit("https://telnyx.com/");
  cy.contains('Accept and close').click();
  mainPage.logInBtnInTopOfPage().click();
  signInPage.authorization('randomEmail@gmail.com', 'TestPassword');
  signInPage.errorMessage().should('be.visible');
  signInPage.errorMessage().should('contain', 'your').screenshot('../../screenshots/SignInWithInvalidData.png')
  });

  it("with an unverified email /#2", () => {
  cy.viewport(1980, 1080);
  cy.visit("https://telnyx.com/");  
  mainPage.logInBtnInTopOfPage().click();
  signInPage.authorization('CypressTest@gmail.com', 'TestPassword#1');
  signInPage.errorMessage().should('be.visible');
  signInPage.errorMessage().should('be.visible').screenshot('../../screenshots/SignInWithUnverifiedEmail.png');
  });

  it("with blocked email /#3", () => {
  cy.viewport(1980, 1080);
  cy.visit("https://telnyx.com/");  
  mainPage.logInBtnInTopOfPage().click();
  signInPage.authorization('koss19978@gmail.com', 'TestPassword#1');
  signInPage.errorMessage().should('be.visible');
  signInPage.errorMessage().should('contain', 'Your account has been blocked. Please contact Telnyx support for information regarding your account.').screenshot('../../screenshots/SignInWithBlockedEmail.png')
  });
});

describe("Sign up: ", () => {
  it("with valid data /#4", () => {
    cy.viewport(1980, 1080);
    cy.visit("https://telnyx.com/");    
    mainPage.signUpBtnInTopOfPage().click();
    signUpPage.registration(randomEmail + '@gmail.com', 'randomName', 'TestPassword1@');
    cy.location().should((loc) => {
      expect(loc.href).to.eq('https://telnyx.com/sign-up/verify-email/f');
    })

    cy.get('h1[class*="Text"]').should('contain', 'We\'ve sent you an email to activate your account')

  });

  it("with already taken email /#5", () => {
    cy.viewport(1980, 1080);
    cy.visit("https://telnyx.com/");    
    mainPage.signUpBtnInTopOfPage().click();
    signUpPage.registration(randomEmail + '@gmail.com', 'randomName', 'TestPassword1@');
    // signUpPage.emailErrorMessage().should('contain', 'This email address is already taken and cannot be used for a new account');
    signUpPage.emailErrorMessage().should('contain', 'Another account already exists that resolves to the same' || 'This email address is already taken and cannot be used for a new account');
    signUpPage.errorMessage().should('contain', 'One or more fields are not valid. Please update these fields and try again.')
  });

  it("with using special characters in full name and password fields /#6", () => {
    cy.viewport(1980, 1080);
    cy.visit("https://telnyx.com/");    
    mainPage.signUpBtnInTopOfPage().click();
    signUpPage.registration(randomMail + '@gmail.com', 'ran#dom$Name%!', 'TestPassword12@');
    cy.location().should((loc) => {
      expect(loc.href).to.eq('https://telnyx.com/sign-up/verify-email/f');
    })
    cy.get('h1[class*="Text"]').should('contain', 'We\'ve sent you an email to activate your account')
    });
});

describe("Sections:", () => {
  it("about us /#7", () => {
    cy.viewport(1980, 1080);
    cy.visit("https://telnyx.com/");        
    mainPage.aboutTelnyxInDropMenu().click({force: true});
    aboutTelnyxPage.videoAboutUs().should('be.visible');
    cy.location().should((loc) => {
            expect(loc.href).to.eq('https://telnyx.com/company/about');
          })
  });

  it("products --> Elastic SIP Trunking /#8", () => {
    cy.viewport(1980, 1080);
    cy.visit("https://telnyx.com/");    
    mainPage.elasticSipTrunkingInDropMenu().click({ force: true });
    cy.location().should((loc) => {
      expect(loc.href).to.eq("https://telnyx.com/products/sip-trunks");
    });
    elasticSipTrunkingPage.videoPortalVideoPoster().scrollIntoView().should('be.visible');
    elasticSipTrunkingPage.competitorNetworksBtn().scrollIntoView();   
    elasticSipTrunkingPage.ourNetworkImage().scrollIntoView().should('be.visible');   
    elasticSipTrunkingPage.competitorNetworksBtn().scrollIntoView().click();
    elasticSipTrunkingPage.competitorNetworksImage().scrollIntoView().should('be.visible');
    
  });

    it("products --> SMS API /#9", () => {
       cy.viewport(1980, 1080);
       cy.visit("https://telnyx.com/");     
       mainPage.smsApiInDropMenu().click({ force: true });
       cy.location().should((loc) => {
            expect(loc.href).to.eq("https://telnyx.com/products/sms-api");
          });
       smsApiPage.seeSmsPricingLink().click();
       cy.location().should((loc) => {
        expect(loc.href).to.eq("https://telnyx.com/pricing/messaging");
      });
      cy.get('.sc-7894861d-2 > :nth-child(1) > .sc-ecffda1a-1 > .sc-ecffda1a-0').click();
      cy.get('a[href="/pricing/messaging/ua"]').scrollIntoView().click();
      cy.location().should((loc) => {
        expect(loc.href).to.eq("https://telnyx.com/pricing/messaging/ua");
      });      
    });
  });

  describe("Site:", () => {
    it("Blog Search  /#10", () => {
       cy.viewport(1980, 1080);
        cy.visit("https://telnyx.com/");        
        mainPage.blogBtnInDowpPage().scrollIntoView().click({force: true});
        cy.location().should((loc) => {
                expect(loc.href).to.eq("https://telnyx.com/resources");
              });
        cy.get('input[id="search"]').type('Introducing Telnyx Storage: Low-Cost Object Storage{Enter}')
        // cy.get('img[alt*="Introducing Telnyx Storage: Low-Cost Object Storage"]').click();
        cy.get('span[class="Text-sc-5o8owa-0 frufKM"]').click();        
        cy.wait(5000);
        cy.location().should((loc) => {
              expect(loc.href).to.eq("https://telnyx.com/resources/introducing-telnyx-storage");
              });
    });
});
