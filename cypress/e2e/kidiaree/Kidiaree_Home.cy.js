describe('Kidiaree Staging', 
    {
      viewportHeight: 1000,
      viewportWidth: 1650,
   }, () => {

    // login number:- 12123232332
    // Kid name:- Dummy Test
    // Kid DOB:- 05/10/2023
    //Gender:- Male


    // Address details
    // Parent name:- Dummy Parent
    // Surname name:- Test Parent
    // Email:- DummyTest@gmail.com
    // Pincode:- 400064
    // Address1 :- malad
    // Address2 :- east
    // Area :- Ghodbander
    // City:- Mumbai
    // Country:- India
    it('Homepage', () => {
        cy.visit("https://staging.kidiaree.in/")
        cy.wait(5000)
      cy.get('#live_location').click()
      cy.wait(10000)
        // IN THE SPOTLIGHT
        cy.get(':nth-child(1) > .course-header > .border-bottom').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > .courses-image > a').click()
        cy.wait(2000)
        cy.go('back')
        cy.go('back')
        cy.wait(3000)
    
        // WORKSHOPS AND CAMPS
        cy.get(':nth-child(2) > .course-header > .border-bottom').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > .courses-image > a').click()
        cy.wait(2000)
        cy.go('back')
        cy.go('back')
        cy.wait(3000)
    
        // EXTRA CURRICULARS
        cy.get('.my-slider > .slick-next > .fa').click().click()
        cy.wait(5000)
        cy.get('.my-slider > .slick-next > .fa').click()
        cy.wait(2000)
        cy.get('.my-slider > .slick-prev > .fa').click()
        cy.wait(2000)
        cy.get('.my-slider > .slick-list > .slick-track > .slick-current > .courses-image > a').click()
        cy.contains('About the Class')
        cy.wait(3000)
        cy.go('back')
        cy.wait(2000)
    
        // SPORTS AND FITNESS
        cy.get('.my-slider-sg > .slick-next > .fa').click()
        cy.wait(2000)
        cy.get('.my-slider-sg > .slick-prev > .fa').click()
        cy.wait(2000)
        cy.get('.my-slider-sg > .slick-list > .slick-track > .slick-current > .courses-image > a').click()
        cy.contains('About the Class')
        cy.wait(3000)
        cy.go('back')
    
    })

    it('All Categories', () => {

    // About-Us
    cy.visit("https://staging.kidiaree.in/")
    cy.wait(5000)
      cy.get('#live_location').click()
      cy.wait(10000)
    cy.get('.header-menu > .main-menu > :nth-child(1) > a').click()
    cy.wait(3000)
    cy.contains('We are delighted to have you here!')
    cy.go('back')
    cy.wait(2000)

    //Classes & Activities
    cy.get('.header-menu > .main-menu > :nth-child(2) > a').click()
    cy.wait(3000)
    cy.contains('Classes & Activities')
    cy.wait(2000)

    // Sub-Category
    //(Workshop and camps)
    cy.get(':nth-child(2) > .single-offer > .image-cat > .rounded').click()
    cy.contains('Results for Workshop and Camps')
    cy.wait(3000)
    cy.go('back')
    cy.wait(2000)

    // Extra Curriculars
    cy.get(':nth-child(3) > .single-offer > .image-cat > .rounded').click()
    cy.contains('Results for Extra Curriculars')
    cy.wait(3000)
    cy.go('back')
    cy.wait(3000)

    // Sports & Games
    cy.get(':nth-child(6) > .single-offer > .image-cat > .rounded').click()
    cy.contains('Results for Sports and Games')
    cy.wait(3000)
    cy.go('back')
    cy.wait(3000)

    // List a class Or Activity
    // cy.get('.header-menu > .main-menu > :nth-child(3) > a').click()
    // cy.contains('Become a Service Provider')
    // cy.get('#en_name').type('DummyTest')
    // cy.get('#en_contact').type('2222222222')
    // cy.get('#en_email').type('Samplemail@gmail.com')
    // cy.get('.form-btn > .btn').click()
    // cy.contains('Your details have been received.')
    // cy.wait(4000)

    // Reach Us
    cy.get('.header-menu > .main-menu > :nth-child(4) > a').click()
    cy.contains('Contact Kidiaree')
    cy.wait(3000)

    })
    
    it('Age dropdown', () => {

        cy.visit("https://staging.kidiaree.in/")
        cy.wait(5000)
        cy.get('#live_location').click()
        cy.wait(10000)
        cy.get('.selelct-box-age > .nice-select').click()
        cy.wait(1000)
        cy.get('[data-value="4"]').click()
        cy.wait(2000)
        cy.get('.my-slider-search-ws > .slick-list > .slick-track > .slick-current > .courses-image > a').click()
        cy.get('#show-more1').click()
        cy.wait(2000)
        cy.get('#show-more').click()
        cy.wait(2000)
        cy.get('.sidebar-description > .btn').click()
        cy.wait(2000)
        cy.go('back')
        cy.go('back')
        cy.wait(2000)
        cy.get('.col-md-2 > .nice-select').click()
        cy.wait(1000)
        cy.get('[data-value="1"]').click()
        cy.get('.my-slider-search-ex > .slick-list > .slick-track > .slick-current > .courses-content > .title > a').click()
        cy.wait(2000)
        cy.go('back')
        cy.get(':nth-child(3) > .container-test > .course-header > .border-bottom').click()
        cy.wait(2000)
        cy.go('back')
        cy.get('.my-slider-search-sp > .slick-list > .slick-track > .single-course > .courses-content > .title > a').click()
        cy.wait(2000)
        cy.go('back')
        cy.get(':nth-child(4) > .container-test > .course-header > .border-bottom').click()
        cy.wait(2000)
        cy.go('back')

   })

  
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
  })