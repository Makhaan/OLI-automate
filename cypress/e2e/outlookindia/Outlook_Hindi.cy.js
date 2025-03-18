describe('Sports Category', 
    {
      viewportHeight: 1000,
      viewportWidth: 1650,
   }, () => {
  
    it('Outlook_Hindi_Homepage', () => {
            cy.visit("https://outlookhindi.com/")
            cy.wait(5000)
            cy.get('.search-btn-modal > .ic56-search').click()
            cy.get('#searchField').type('Business')
            cy.wait(2000)
            cy.get('#search > .submit > .ic56-search').click()
            cy.contains('Search Result :')
            cy.wait(2000)
            cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
            cy.contains('मैगजीन')
            
            cy.visit("https://outlookhindi.com/")
            // cy.get('.main_header56__container > .row > .header56__part--left > .header56__hamburger > .hamburger').click()
            // cy.wait(5000)
            cy.get(':nth-child(1) > .thumbnail56 > a > .attachment-medium').click()
            cy.wait(2000)
            cy.contains('मैगजीन')
            cy.go('back')

            cy.get('.hero-img').click()
            cy.wait(2000)
            cy.contains('मैगजीन')
            cy.go('back')

            //Desh Section on homepage
            cy.get(':nth-child(2) > .container--main > .primary56 > .blog56 > :nth-child(1) > .thumbnail56 > a > .attachment-thumbnail-medium').click()
            cy.wait(2000)
            cy.contains('मैगजीन')
            cy.go('back')

            //Raajneeti section on homepage
            cy.get('.attachment-large').click()
            cy.wait(2000)
            cy.contains('मैगजीन')
            cy.go('back')

            cy.get('.section_64a7e2ab54b8433 > .container--main > .primary56 > .blog56--group > .row56__col--medium > .blog56 > :nth-child(2) > .post56__text > .title56 > a').click()
            cy.wait(2000)
            cy.contains('मैगजीन')
            cy.go('back')

            //Business section on homepage
            cy.get(':nth-child(4) > .container--main > .primary56 > .blog56 > :nth-child(1) > .thumbnail56 > a > .attachment-thumbnail-medium').click()
            cy.wait(2000)
            cy.contains('मैगजीन')
            cy.go('back')

            //Sports section on homepage
            cy.get(':nth-child(1) > .thumbnail56 > a > .sports-img').click()
            cy.wait(2000)
            cy.contains('मैगजीन')
            cy.go('back')

            cy.get('.section_64a7e2ab54b8455 > .container--main > .primary56 > .blog56 > :nth-child(3) > .post56__text > .title56 > a').click()
            cy.wait(2000)
            cy.contains('मैगजीन')
            cy.go('back')

            //Interview RHS on homepage
            cy.get('#latest-posts-7 > .blog56 > .post56 > .post56__text > .title56 > a').click()
            cy.wait(2000)
            cy.contains('मैगजीन')
            cy.go('back')
   })
            it('Desh', () => {
            cy.visit("https://outlookhindi.com/country")
            cy.wait(2000)
            cy.contains('देश')

            cy.get(':nth-child(1) > .thumbnail56 > a > .attachment-thumbnail-medium').click()
            cy.wait(2000)
            cy.contains('मैगजीन')
            cy.go('back')

            cy.get('.paginate > :nth-child(2) > a').click()
            cy.wait(2000)
            cy.contains('देश')

            // Page no 2
            cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
            cy.wait(2000)
            cy.contains('मैगजीन')
            cy.go('back')

            cy.get('.paginate > :nth-child(4) > a').click()
            cy.wait(2000)
            cy.contains('देश')

   })

            it('Magazine', () => {
                cy.visit("https://outlookhindi.com/magazine")
                cy.wait(2000)
                cy.contains('मैगजीन')
    
                cy.get(':nth-child(1) > .col-md-4 > .mag_cov_img > a > .img_responsive').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन डिटेल')
    
                cy.get(':nth-child(2) > .content_div > h2 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                
                cy.visit("https://outlookhindi.com/magazine")
    
                //Page no 2
                cy.get('.paginate > :nth-child(2) > a').click()
                cy.wait(2000)
                cy.contains('मैगजीन')
    
                cy.get(':nth-child(1) > .col-md-4 > .mag_cov_img > a > .img_responsive').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')
    
                //page no 3
                cy.get('.paginate > :nth-child(4) > a').click()
                cy.wait(2000)
                cy.contains('मैगजीन')
    
                cy.get(':nth-child(1) > .col-md-4 > .mag_cov_img > a > .img_responsive').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')

            })

            it('Politics', () => {
                cy.visit("https://outlookhindi.com/politics")
                cy.wait(5000)
                cy.contains('राजनीति')

                cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.primary56 > .blog56 > :nth-child(2) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.paginate > :nth-child(4) > a').click()
                cy.wait(5000)
                cy.contains('राजनीति')

                cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.paginate > :nth-child(6) > a').click()
                cy.wait(5000)
                cy.contains('राजनीति')

            })

            it('Business and economy', () => {
                cy.visit("https://outlookhindi.com/business-and-economy")
                cy.wait(5000)
                cy.contains('अर्थ जगत')

                cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get(':nth-child(2) > .thumbnail56 > a > .attachment-thumbnail-medium').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.paginate > :nth-child(2) > a').click()
                cy.wait(5000)
                cy.contains('अर्थ जगत')

                cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.primary56 > .blog56 > :nth-child(2) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.paginate > :nth-child(4) > a').click()
                cy.wait(5000)
                cy.contains('अर्थ जगत')
            })

            it('Sports', () => {
                cy.visit("https://outlookhindi.com/sport")
                cy.wait(5000)
                cy.contains('खेल')

                cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.primary56 > .blog56 > :nth-child(2) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.paginate > :nth-child(2) > a').click()
                cy.wait(5000)
                cy.contains('खेल')

                cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.primary56 > .blog56 > :nth-child(2) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.paginate > :nth-child(4) > a').click()
                cy.wait(5000)
                cy.contains('खेल')

            })

            it('View', () => {
                cy.visit("https://outlookhindi.com/view")
                cy.wait(5000)
                cy.contains('नज़रिया')

                cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.primary56 > .blog56 > :nth-child(2) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.paginate > :nth-child(2) > a').click()
                cy.wait(5000)
                cy.contains('नज़रिया')

                cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.primary56 > .blog56 > :nth-child(2) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')
                
                cy.get('.paginate > :nth-child(4) > a').click()
                cy.wait(5000)
                cy.contains('नज़रिया')

            })

            it('Cinema', () => {
                cy.visit("https://outlookhindi.com/cinema")
                cy.wait(5000)
                cy.contains('सिनेमा')

                cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.primary56 > .blog56 > :nth-child(2) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.paginate > :nth-child(2) > a').click()
                cy.wait(5000)
                cy.contains('सिनेमा')

                cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.primary56 > .blog56 > :nth-child(2) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.paginate > :nth-child(4) > a').click()
                cy.wait(5000)
                cy.contains('सिनेमा')

            })

            it('World', () => {
                cy.visit("https://outlookhindi.com/world")
                cy.wait(5000)
                cy.contains('दुनिया')

                cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.primary56 > .blog56 > :nth-child(2) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.paginate > :nth-child(2) > a').click()
                cy.wait(5000)
                cy.contains('दुनिया')

                cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.primary56 > .blog56 > :nth-child(2) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.paginate > :nth-child(4) > a').click()
                cy.wait(5000)
                cy.contains('दुनिया')

            })

            it('Video', () => {
                cy.visit("https://outlookhindi.com/video")
                cy.wait(5000)
                cy.contains('वीडियो गैलरी')

                cy.get(':nth-child(1) > .vd_iframe > a > .img_responsive').click()
                cy.wait(10000)
                cy.contains('वीडियो गैलरी')
                cy.go('back')

                cy.get(':nth-child(2) > .vd_iframe > a > .img_responsive').click()
                cy.wait(10000)
                cy.contains('वीडियो गैलरी')
                cy.go('back')

                cy.get('.paginate > :nth-child(2) > a').click()
                cy.wait(5000)
                cy.contains('वीडियो गैलरी')

                cy.get(':nth-child(1) > .vd_iframe > a > .img_responsive').click()
                cy.wait(10000)
                cy.contains('वीडियो गैलरी')
                cy.go('back')

                cy.get('.paginate > :nth-child(4) > a').click()
                cy.wait(5000)
                cy.contains('वीडियो गैलरी')
            })

            it('Photograph', () => {
                cy.visit("https://outlookhindi.com/photograph")
                cy.wait(5000)
                cy.contains('फोटो')

                cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
                cy.wait(5000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.primary56 > .blog56 > :nth-child(2) > .post56__text > .title56 > a').click()
                cy.wait(5000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get(':nth-child(10) > .post56__text > .title56 > a').click()
                cy.wait(5000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.paginate > :nth-child(2) > a').click()
                cy.wait(5000)
                cy.contains('फोटो')

                cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
                cy.wait(5000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.primary56 > .blog56 > :nth-child(2) > .post56__text > .title56 > a').click()
                cy.wait(5000)
                cy.contains('मैगज़ीन')
                cy.go('back')

                cy.get('.paginate > :nth-child(4) > a').click()
                cy.wait(5000)
                cy.contains('फोटो')

            })

            it('art and culture', () => {
                cy.visit("https://outlookhindi.com/art-and-culture")
                cy.wait(5000)
                cy.contains('कला-संस्कृति')
            
                cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')
            
                cy.get('.primary56 > .blog56 > :nth-child(2) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')
            
                cy.get('.paginate > :nth-child(2) > a').click()
                cy.wait(5000)
                cy.contains('कला-संस्कृति')
            
                cy.get('.primary56 > .blog56 > :nth-child(1) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')
            
                cy.get('.primary56 > .blog56 > :nth-child(2) > .post56__text > .title56 > a').click()
                cy.wait(2000)
                cy.contains('मैगज़ीन')
                cy.go('back')

            })

   Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
    
  })