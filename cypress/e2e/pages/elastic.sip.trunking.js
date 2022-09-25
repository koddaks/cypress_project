class ElasticSipTrunkingPage {
  videoPortalVideoPoster(){
    return cy.get('video[poster*="portal_video_poster"]');
  }
  
  ourNetworkImage(){
    return cy.get('[src*="Map_PoPNetworkMultiCloud__5___3_.svg"]');
  }
  
  competitorNetworksBtn(){
    return cy.get('div[aria-label="Competitor Networks"]');
  }
  competitorNetworksImage(){
    return cy.get('div img[src*="NetworkMap_Competitor_Twilio.svg"]');
  }
  
}

export default ElasticSipTrunkingPage