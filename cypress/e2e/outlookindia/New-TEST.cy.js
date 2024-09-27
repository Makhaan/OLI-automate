describe('New Test',
    {
        viewportHeight: 1000,
        viewportWidth: 1650,
    }, () => {

        beforeEach(() => {
            cy.intercept('GET', '**/some-endpoint').as('someAlias');
        });

        it('Homepage', () => {
            cy.visit("https://www.outlookindia.com/")
            cy.wait(2000)

            //LHS drawer menu
            cy.get('#menu-bar').click()
            cy.wait(1000)
            cy.get('.closebtn').click()

            //search page
            cy.get('#searchToggle').click()
            cy.get('#searchInputNav').type('Harbor Law').click()
            cy.get('#searchButtonNav').click()
            cy.get('.lms-btn').click()
            cy.wait(2000)

            //National Page
            cy.get('.rm-menu-list-block > :nth-child(3) > .d-flex > .rm-category').click()
            cy.get('.rm-container > .slider-one1 > .slick-next').click()
            cy.get('.rm-container > .slider-one1 > .slick-prev').click()
            cy.get('#load-more-button-category').click()

            //International page
            cy.get('.rm-menu-list-block > :nth-child(4)').click()
            cy.wait(2000)
            cy.get('.rm-container > .slider-one1 > .slick-next').click()
            cy.get('.rm-container > .slider-one1 > .slick-prev').click()
            cy.get('#load-more-button-category').click()
        })
        
        it('magazine page', () => {
            cy.visit("https://www.outlookindia.com/magazine")
            cy.contains('ALL ISSUES')
            cy.get('#select-mag').select('2023')
            cy.get('#sub-tab-pane-All-02023 > .row > [data-test-id="current-issue-1"] > .magazine-cover-image-m_image__3-ZtB > a > .qt-image').click()
            cy.get('.col-5 > .article-img-box > a > .article-img').click()
            cy.go('back')
            cy.get(':nth-child(1) > .article-img-box > a > .article-img').click()
            cy.go('back')

        })
        it('Weekender page', () => {
            cy.visit("https://www.outlookindia.com/weekender")
            cy.contains('Back to Home')
            cy.get('#section0 > .fp-tableCell > a > .card_layout > .__right').click()
            cy.go('back')
            cy.get('.btn-down > a > img').click()
            cy.wait(1000)
            cy.get('.btn-home').click()

        })
        it('Sports page', () => {
            cy.visit("https://www.outlookindia.com/sports")
            cy.contains('RESULT - 2nd ODI')

            cy.visit("https://www.outlookindia.com/sports/cricket")
            cy.contains('Cricket (Sports)')
            cy.get(':nth-child(3) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            cy.go('back')
            cy.get('#load-more-button-category').click()
            cy.wait(500)
            cy.get('#load-more-button-category').click()

            cy.visit("https://www.outlookindia.com/sports/badminton")
            cy.contains('Badminton (Sports)')
            cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            cy.go('back')
            cy.get(':nth-child(2) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            cy.go('back')
            cy.get('#load-more-button-category').click()
            cy.get('#load-more-button-category').click()
            cy.wait(1000)

            cy.visit("https://www.outlookindia.com/sports/football")
            cy.contains('Football (Sports)')
            cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            cy.go('back')
            cy.get(':nth-child(44) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            cy.go('back')
            cy.get('#load-more-button-category').click()
            cy.get('#load-more-button-category').click()
            cy.wait(1000)

            cy.visit("https://www.outlookindia.com/sports/hockey")
            cy.contains('Hockey (Sports)')
            cy.get('#load-more-button-category').click()
            cy.get('#load-more-button-category').click()
            cy.get('#load-more-button-category').click()
            cy.wait(1000)

            cy.visit("https://www.outlookindia.com/sports/tennis")
            cy.contains('Tennis (Sports)')
            cy.get('#load-more-button-category').click()
            cy.get('#load-more-button-category').click()
            cy.get('#load-more-button-category').click()
            cy.wait(1000)

            cy.visit("https://www.outlookindia.com/sports/motorsport")
            cy.contains('Motorsport (Sports)')
            cy.get('#load-more-button-category').click()
            cy.get('#load-more-button-category').click()
            cy.get('#load-more-button-category').click()
            cy.wait(1000)

        })

        it('Entertainment page', () => {
            cy.visit("https://www.outlookindia.com/art-entertainment")
            cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            cy.go('back')
            cy.get(':nth-child(6) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            cy.go('back')
            cy.get('#load-more-button-category').click()
            cy.get('#load-more-button-category').click()
            cy.wait(1000)
        })

        it('Travel page', () => {
            cy.visit("https://www.outlookindia.com/traveller")
            cy.contains('Traveller')
            cy.get(':nth-child(5) > .article-hero-list > .category-main > :nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            cy.contains('Click here to read the full article')
            cy.go('back')

            cy.get(':nth-child(1) > .article-hero-list > :nth-child(1) > .articles > .row > .order-1 > .article-img-box > a > .article-img').click()
            cy.contains('Click here to read the full article')


            cy.visit("https://www.outlookindia.com/traveller/experiences")
            cy.contains('Experiences')

            cy.visit("https://www.outlookindia.com/traveller/stay")
            cy.contains('Stay')

            cy.visit("https://www.outlookindia.com/traveller/whats-new")
            cy.contains('load more stories')

            cy.visit("https://www.outlookindia.com/traveller/editors-picks")
            cy.contains('load more stories')

        })

        it('Others page', () => {
            cy.visit("https://www.outlookindia.com/whats-hot")
            cy.contains('BY')
            cy.visit("https://www.outlookindia.com/whats-hot/the-best-handheld-vacuums-in-india-for-2024-powerful-portable-and-efficient")
            cy.go('back')
            cy.get('#load-more-button-category').click()
            cy.wait(2000)
            cy.get('#load-more-button-category').click()
            cy.wait(1000)

            cy.visit("https://www.outlookindia.com/culture-society")
            cy.contains('Culture & Society')
            cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            cy.contains('Tags')
            cy.go('back')
            cy.get(':nth-child(6) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            cy.contains('Tags')
            cy.go('back')
            cy.get('#load-more-button-category').click()
            cy.contains('Culture & Society')
            cy.get('#load-more-button-category').click()
            cy.contains('Culture & Society')
            cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            cy.contains('Tags')
            cy.wait(1000)

            cy.visit("https://outlookhindi.com/")
            
            cy.wait(2000)

            // outlookluxe has Uncaught error

            cy.visit("https://www.outlookindia.com/brand-studio")
            cy.get(':nth-child(2) > .row > .col-lg-9 > .category-head-two > .cc-more > a').click()
            cy.go('back')
            cy.get(':nth-child(3) > .row > .col-lg-9 > .category-head-two > .cc-more > a').click()
            cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            cy.go('back')
            cy.go('back')
            cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            cy.go('back')
            cy.get(':nth-child(7) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            cy.go('back')
            cy.get('#load-more-button-category').click()
            cy.get('#load-more-button-category').click()
            cy.wait(1000)

            cy.visit("https://www.outlookindia.com/astrology")
            cy.get('.todays-horoscope-box > .row > :nth-child(1)').click()
            cy.get('.horoscope-tabs > .horoscope-scroll-list > ul > :nth-child(3) > a > .horoscope-box').click()
            cy.get('#gemini-readMoreBtn').click()
            cy.get(':nth-child(2) > .article-hero-list > :nth-child(1) > .row > :nth-child(1) > a > .w-100').click()
            cy.go('back')
            cy.get('.more > a').click()
            cy.get(':nth-child(1) > .articles > .row > .col-4 > .article-img-box > a > .article-img').click()
            cy.go('back')
            cy.go('back')
            cy.get('.ls-read-more').click()
            cy.go('back')
            cy.go('back')
            cy.go('back')
            cy.get(':nth-child(1) > a > .numero').click()
            cy.go('back')
            cy.get(':nth-child(1) > a > .hc-tags').click()
            cy.wait(1000)

        })

    })