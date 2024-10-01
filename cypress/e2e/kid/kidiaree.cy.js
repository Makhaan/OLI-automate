describe('Kidiaree Staging', 
    {
      viewportHeight: 1000,
      viewportWidth: 1650,
   }, () => {
  
    it('Homepage', () => {
      
        cy.visit("https://staging.kidiaree.in/")
        cy.get('#zipcode')
        .type('Mira road{downarrow}');
       
        

       
  
   })
   Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
    
  })
  