describe('Kidiaree Login', 
    {
      viewportHeight: 1000,
      viewportWidth: 1650,
   }, () => {
  
    it('Login', () => {
  
      cy.visit("https://staging.kidiaree.in/")
      cy.wait(5000)
      cy.get('#live_location').click()
      cy.wait(10000)
      cy.get('.cart-btn > .flaticon-user-2').click()
      cy.get('#offcanvasMenu > .offcanvas-body > .offcanvas-menu > .main-menu > li > a').click()
      cy.get('.nice-select').click()
      cy.get('.list > :nth-child(2)').click()
      cy.get('#emailorphone').click().type('12123232332')
      cy.get('#login-btn').click()
     // cy.contains('Malad')
      cy.contains(' Classes & Activities for kids')
      cy.contains('Dummy Parent')
      // cy.wait(2000)
 
      // Product payment with login (Normal flow)
      cy.visit("https://staging.kidiaree.in/workshop_and_camps?id=298")
      cy.wait(5000)
      cy.get('.sidebar-description > .btn').click()
      cy.wait(2000)
      cy.get('.plus').click()
      cy.wait(2000)
      cy.get('.plus').click()
      cy.wait(3000)
      cy.get('.minus').click()
      cy.get('#exampleModalToggle > .modal-dialog > .modal-content > .modal-footer > .btn').click()
      cy.wait(2000)
      cy.get('#kid_424').click()
      cy.get('#selectKidForm > .modal-footer > .btn').click()  // can add kid
      cy.wait(2000)
      cy.contains('Date & Time:')
      cy.contains('Venue')
      cy.contains('Total Amount:')
      cy.get('div.mt-2 > .btn').click()
      cy.wait(4000)

      // Quiz Page
      cy.visit("https://staging.kidiaree.in/quiz")
      cy.contains('Why')
      cy.contains('Quizzing!')
      cy.wait(2000)
      cy.get('#toggleText').click()
      cy.wait(3000)
      cy.get('a > .btn').click()
      cy.contains('Encouraging Children to stay curious!')
      cy.wait(3000)
      cy.get(':nth-child(2) > .col-md-7 > :nth-child(3) > .form-check-input').click()
      cy.wait(2000)
     // cy.get(':nth-child(3) > .col-md-7 > :nth-child(3) > .form-check-input').click()
      //cy.wait(2000)
      cy.get('.user-form > :nth-child(4) > .form-control').clear().type('Junior Champion')
      cy.wait(2000)
      cy.get(':nth-child(6) > .nice-select').click()
      cy.get('[data-value="5"]').click()
      cy.wait(2000)
      cy.get(':nth-child(8) > .form-control').type('St. Franics')
      cy.wait(2000)
      cy.get('#addUser').click()
      cy.get('#addUser').click()
      cy.wait(3000)
      cy.contains('Participant 1')
      cy.contains('Participant 2')
      cy.contains('Participant 3')

      
      cy.get('[data-index="3"] > .btn').click() // Remove 1 Participant 
      cy.wait(3000)
      cy.get('[data-index="2"] > :nth-child(2) > .col-md-7 > :nth-child(1) > .form-check-input').click()
      //cy.get('[data-index="2"] > :nth-child(3) > .col-md-7 > :nth-child(5) > .form-check-input').click()
      cy.get('[data-index="2"] > :nth-child(4) > .form-control').type('qwertyuo')
      //cy.get('#dob-2').type('23032008')
      cy.get('[data-index="2"] > .btn').click()
      cy.wait(3000)
      cy.get('.flex > .d-flex').click()

   })

   Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })

  })