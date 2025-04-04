describe('Login using Google access token', 
    {
        viewportHeight: 1000,
        viewportWidth: 1650,
     }, () => {
    it('Should login via Google Meet', () => {

        cy.visit("https://app.meetmemo.ai/")
        cy.wait(5000)
        cy.contains('MeetMemo')
        cy.url().should('include', '/login')

        cy.visit("https://app.meetmemo.ai/verify_token?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNSwibmFtZSI6Ik1hYWtoYW4gR3VwdGEiLCJwcm9maWxlX3BpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLRzlWSk5UaDRuUmZYQXJBYWlRb3cxLUV5b2xKaUtaMlVVbzZpbXp4VFJFeHF6T0t3PXM5Ni1jIiwib3JnYW5pemF0aW9uX2lkIjoiOWZmZDBjZjAtMWE2YS00OWUzLWFiMTctNzBmMTE5NDM4YzY1IiwiaWF0IjoxNzQzNzcwMzY0LCJleHAiOjE3NDYzNjIzNjR9.RwDRAAR5V20IT4Lxu_7fskdYdoRzgQiMTjh-I7mFsdc")
        cy.url().should('include', '/dashboard')
        cy.contains('Pick a date')
        cy.wait(2000)

        cy.get('.transition-all')
        cy.contains('Past').click();
        cy.url().should('include', '/dashboard')
        cy.contains('Pick a date')
        cy.wait(2000)

        cy.get('.tour-meeting-sync > .transition-all')
        cy.contains('Upcoming').click();
        cy.url().should('include', '/dashboard')
        cy.contains('Pick a date')
        cy.wait(2000)

        cy.get('.hidden > [href="/calendar"]').click()
        cy.url().should('include', '/calendar')
        cy.contains('Tue')
        cy.wait(2000)

        cy.get('.hidden > [href="/spaces"]').click()
        cy.url().should('include', '/spaces')
        cy.contains('Add New Space')
        cy.wait(2000)

        cy.get('.inline-flex.relative').click()
        cy.wait(3000)

        cy.get('.rounded-md > .relative > .flex').click()
        cy.wait(1000)

        cy.get('.py-1 > :nth-child(6)').click()

        

        
      });
    });
  
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
  

      
