describe('Test', 
    {
      viewportHeight: 1000,
      viewportWidth: 1650,
   }, () => {
  
    it('OLB_Homepage', () => {
        cy.visit("https://www.outlookbusiness.com/")
        cy.wait(5000)
        cy.contains('Top Picks')
        cy.get('.mb-4 > .article-hero-list > :nth-child(1) > .articles > :nth-child(1) > .col-md-4 > .article-img-box > a > .article-img').click()
        cy.wait(2000)
        cy.contains('MOST POPULAR')
        cy.go('back')
    
        cy.get('.text-center > .article-img-box > a > .article-img').click()
        cy.wait(2000)
        cy.contains('MOST POPULAR')
        cy.go('back')
    
        cy.get(':nth-child(2) > .articles > .article-img-box > a > .article-img').click()
        cy.wait(2000)
        //cy.contains('MOST POPULAR')
        cy.go('back')
    
        cy.get(':nth-child(5) > .row.justify-content-center > .col-lg-9 > :nth-child(2) > .mb-md-0 > .articles > .row > .col-5 > .article-img-box > a > .article-img').click()
        cy.wait(2000)
        //cy.contains('MOST POPULAR')
        cy.go('back')
    
        cy.get(':nth-child(5) > .row.justify-content-center > .col-md-10 > :nth-child(1) > .popular > :nth-child(2) > .font-size-1').click()
        cy.wait(2000)
        //cy.contains('MOST POPULAR')
        cy.go('back')
    
        // cy.get('.slick-current > :nth-child(1) > [style="width: 100%; display: inline-block;"] > .articles > .article-img-box > a > .article-img1').click()
        // cy.wait(2000)
        // //cy.contains('MOST POPULAR')
        // cy.go('back')
    
        cy.get(':nth-child(7) > .row.justify-content-center > .col-lg-9 > :nth-child(2) > .mb-md-0 > .articles > .row > .col-5 > .article-img-box > a > .article-img').click()
        cy.wait(2000)
       // cy.contains('MOST POPULAR')
        cy.go('back')
    
        cy.get(':nth-child(7) > .row.justify-content-center > .col-md-10 > :nth-child(1) > .popular > :nth-child(2) > .font-size-1').click()
        cy.wait(2000)
       // cy.contains('MOST POPULAR')
        cy.go('back')
    
        cy.get('.slick-current > :nth-child(1) > [style="width: 100%; display: inline-block;"] > .articles > .row > :nth-child(1) > .article-img-box > .wst-height-cat > .article-img').click()
        cy.wait(2000)
       // cy.contains('MOST POPULAR')
        cy.go('back')
    
        cy.get(':nth-child(10) > .row.justify-content-center > .col-lg-9 > :nth-child(2) > :nth-child(2) > :nth-child(1) > .br-grey > .article-hero-list > :nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
        cy.wait(2000)
       // cy.contains('MOST POPULAR')
        cy.go('back')
    
      //   cy.get(':nth-child(9) > .row.justify-content-center > .col-md-10 > :nth-child(1) > .popular > :nth-child(2) > .font-size-1').click()
      //   cy.wait(2000)
      //   cy.contains('MOST POPULAR')
      //   cy.go('back')
    
        cy.get(':nth-child(10) > .row.justify-content-center > .col-lg-9 > :nth-child(2) > .mb-md-0 > .articles > .row > .col-5 > .article-img-box > a > .article-img').click()
        cy.wait(2000)
        //cy.contains('MOST POPULAR')
        cy.go('back')
    
        cy.get(':nth-child(10) > .row.justify-content-center > .col-md-10 > :nth-child(1) > .popular > :nth-child(2) > .font-size-1').click()
        cy.wait(2000)
       // cy.contains('MOST POPULAR')
        cy.go('back')
    
        cy.get(':nth-child(11) > .row.justify-content-center > .col-lg-9 > :nth-child(2) > .mb-md-0 > .articles > .row > .col-5 > .article-img-box > a > .article-img').click()
        cy.wait(2000)
       // cy.contains('MOST POPULAR')
        cy.go('back')
    
        cy.get(':nth-child(11) > .row.justify-content-center > .col-md-10 > :nth-child(1) > .popular > :nth-child(3) > .font-size-1').click()
        cy.wait(2000)
       // cy.contains('MOST POPULAR')
        cy.go('back')

        cy.wait(10000)

        cy.get('.text-center > :nth-child(1) > a > .w-100').click()
        cy.wait(5000)
        cy.go('back')

        cy.wait(2000)
        cy.get(':nth-child(14) > .row.justify-content-center > .col-lg-9 > :nth-child(2) > :nth-child(2) > :nth-child(1) > .br-grey > .article-hero-list > :nth-child(2) > .articles > .row > .col-8 > .article-heading-one > a').click()
        cy.wait(2000)
        cy.go('back')

        cy.get(':nth-child(15) > .row.justify-content-center > .col-md-10 > :nth-child(1) > .popular > :nth-child(3) > .font-size-1').click()
        cy.wait(2000)
        cy.go('back')

        cy.get(':nth-child(16) > .row.justify-content-center > .col-md-10 > :nth-child(1) > .popular > :nth-child(6) > .font-size-1').click()
        cy.wait(2000)
        cy.go('back')
               
  })

  it('Markets', () => {
    cy.visit("https://www.outlookbusiness.com/markets")
    cy.contains('Markets')
    cy.wait(2000)

    cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.get('.lms-btn').click()
    cy.wait(5000)

    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.get(':nth-child(4) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.get('.lms-btn').click()
    cy.wait(5000)

    cy.get('.lms-btn').click()
    cy.wait(5000)

  })

  it('News', () => {
    cy.visit("https://www.outlookbusiness.com/news")
    cy.contains('News')
    cy.wait(2000)

    cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('News')
    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('News')
    cy.get('.lms-btn').click()
    cy.wait(5000)

    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('News')
    cy.get(':nth-child(4) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.get('.lms-btn').click()
    cy.contains('News')
    cy.wait(5000)

    cy.get('.lms-btn').click()
    cy.contains('News')
    cy.wait(5000)

})

it('Corporate', () => {
    cy.visit("https://www.outlookbusiness.com/corporate")
    cy.contains('Corporate')
    cy.wait(2000)

    cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('Corporate')
    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('Corporate')
    cy.get('.lms-btn').click()
    cy.wait(5000)

    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('Corporate')
    cy.get(':nth-child(4) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('Corporate')
    cy.get('.lms-btn').click()
    cy.wait(5000)

    cy.contains('Corporate')
    cy.get('.lms-btn').click()
    cy.wait(5000)


   })

   it('In-Depth', () => {
    cy.visit("https://www.outlookbusiness.com/in-depth")
    cy.contains('OB Analysis')
    cy.wait(2000)

    cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('OB Analysis')
    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('OB Analysis')
    cy.get('.lms-btn').click()
    cy.wait(5000)

    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('OB Analysis')
    cy.get(':nth-child(4) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.get('.lms-btn').click()
    cy.contains('OB Analysis')
    cy.wait(5000)

    cy.get('.lms-btn').click()
    cy.contains('OB Analysis')
    cy.wait(5000)


})
it('Explainers', () => {
cy.visit("https://www.outlookbusiness.com/explainers")
    cy.contains('Explainers')
    cy.wait(2000)

    cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('Explainers')
    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('Explainers')
    cy.get('.lms-btn').click()
    cy.wait(5000)

    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('Explainers')
    cy.get(':nth-child(4) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.get('.lms-btn').click()
    cy.contains('Explainers')
    cy.wait(5000)

    cy.get('.lms-btn').click()
    cy.contains('Explainers')
    cy.wait(5000)
   })


   it('Interviews', () => {
    cy.visit("https://www.outlookbusiness.com/interviews")
    cy.contains('In Conversation')
    cy.wait(2000)

    cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('In Conversation')
    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('In Conversation')
    cy.get('.lms-btn').click()
    cy.wait(5000)

    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('In Conversation')
    cy.get(':nth-child(4) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.get('.lms-btn').click()
    cy.contains('In Conversation')
    cy.wait(5000)

    cy.get('.lms-btn').click()
    cy.contains('In Conversation')
    cy.wait(5000)

   })

it('Columns', () => {
   cy.visit("https://www.outlookbusiness.com/columns")
   cy.contains('Opinion')
   cy.wait(2000)

   cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
   cy.wait(2000)
   cy.go('back')

   cy.contains('Opinion')
   cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
   cy.wait(2000)
   cy.go('back')

   cy.contains('Opinion')
   cy.get('.lms-btn').click()
   cy.wait(5000)

   cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
   cy.wait(2000)
   cy.go('back')

   cy.contains('Opinion')
   cy.get(':nth-child(4) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
   cy.wait(2000)
   cy.go('back')

   cy.get('.lms-btn').click()
   cy.contains('Opinion')
   cy.wait(5000)

   cy.get('.lms-btn').click()
   cy.contains('Opinion')
   cy.wait(5000)
})

it('Economy and Policy', () => {
    cy.visit("https://www.outlookbusiness.com/economy-and-policy")
    cy.contains('Economy and Policy')
    cy.wait(2000)

    cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('Economy and Policy')
    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('Economy and Policy')
    cy.get('.lms-btn').click()
    cy.wait(5000)

    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('Economy and Policy')
    cy.get(':nth-child(4) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.get('.lms-btn').click()
    cy.contains('Economy and Policy')
    cy.wait(5000)

    cy.get('.lms-btn').click()
    cy.contains('Economy and Policy')
    cy.wait(5000)
})

it('Technology', () => {
    cy.visit("https://www.outlookbusiness.com/technology")
    cy.contains('Technology')
    cy.wait(2000)

    cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('Technology')
    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('Technology')
    cy.get('.lms-btn').click()
    cy.wait(5000)

    cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.contains('Technology')
    cy.get(':nth-child(4) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.get('.lms-btn').click()
    cy.contains('Technology')
    cy.wait(5000)

    cy.get('.lms-btn').click()
    cy.contains('Technology')
    cy.wait(5000)

})

it('Single Author Page', () => {
    cy.visit("https://www.outlookbusiness.com/author/outlook-business-desk")
    cy.contains('Outlook Business Desk')
    cy.get('.breadcrumb > :nth-child(2) > a').click()
    cy.wait(2000)

    cy.visit("https://www.outlookbusiness.com/author/outlook-business-desk")
    cy.contains('Outlook Business Desk')
    cy.get('.breadcrumb > :nth-child(1) > a').click()
    cy.wait(2000)

    cy.visit("https://www.outlookbusiness.com/author/outlook-business-desk")
    cy.contains('Outlook Business Desk')
    cy.wait(2000)

    cy.get(':nth-child(1) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.get(':nth-child(2) > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.get('#load-more-button-author').click()
    cy.contains('Outlook Business Desk')
    cy.wait(2000)

    cy.visit("https://www.outlookbusiness.com/authors")
    cy.contains('Authors')
    cy.wait(5000)

    cy.get(':nth-child(1) > :nth-child(1) > .w-100').click()
    cy.wait(5000)
    cy.go('back')

    cy.get('#akc-al-A > :nth-child(2) > :nth-child(1) > .w-100').click()
    cy.wait(5000)
    cy.go('back')

    cy.get('#two-tab-C').click()
    cy.contains('Authors')
    cy.wait(5000)

    cy.get('#two-tab-G').click()
    cy.contains('Authors')
    cy.wait(5000)

})

it('Topic page', () => {
    cy.visit("https://www.outlookbusiness.com/topic")
    cy.contains('Topic')
    cy.get('[href="https://www.outlookbusiness.com/topic/women"]').click()
    cy.wait(2000)

    cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

    cy.get('.lms-btn').click()
    cy.wait(2000)

    cy.visit("https://www.outlookbusiness.com/topic")
    cy.contains('Topic')

    cy.get('[href="https://www.outlookbusiness.com/topic/new-tax-regime"]').click()
    cy.wait(2000)

    cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
    cy.wait(2000)
    cy.go('back')

})


   })



Cypress.on('uncaught:exception', (err, runnable) => {
   return false
})