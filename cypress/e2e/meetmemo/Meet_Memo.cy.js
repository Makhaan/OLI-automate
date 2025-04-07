describe('Meet_Memo.ai',
  {
    viewportHeight: 1000,
    viewportWidth: 1650,
  }, () => {
    describe('Login and Dashboard Flow', () => {
      const tokenUrl = "https://app.meetmemo.ai/verify_token?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNywibmFtZSI6Im1hYWtoYW4uZW5wb2ludGUiLCJwcm9maWxlX3BpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKMzlWb3RCdjlwWGlGOFg2VE5ydnNvaG5xRHNpbUJacTZFc3phaVoxRzMySDVUaXc9czk2LWMiLCJvcmdhbml6YXRpb25faWQiOiIzZDM3OWJkOC0wYmVkLTQ1MzQtOWIzYS04MzIxNzEwNWZhZDEiLCJpYXQiOjE3NDM4NDYxNzYsImV4cCI6MTc0NjQzODE3Nn0.-YtEklseMje-fHzVSLsD62Ecym8PWEx3zOX4vpX6V4g";

      beforeEach(() => {
        cy.visit("https://app.meetmemo.ai/");
        cy.contains('Connect Your Calenders to get Started');
        cy.url().should('include', '/login');
      });

      it('should login and redirect to dashboard', () => {
        cy.visit(tokenUrl);
        cy.url().should('include', '/dashboard');
      });

      it('should toggle between past and upcoming events', () => {
        cy.visit(tokenUrl);

        cy.get('[value="past"]').click();
        cy.url().should('include', '/dashboard');

        cy.get('[value="upcoming"]').click();
        cy.url().should('include', '/dashboard');
      });

      it('should interact with the calendar and set dates', () => {
        cy.visit(tokenUrl);
        cy.get('#date').click();
        cy.get('[data-day="2025-04-01"] > .size-9').click();
        cy.get('[data-day="2025-04-24"] > .size-9').click();
        cy.get('.justify-end > .bg-m_blue_700').click();
      });

      it('should handle cancel and filter actions correctly', () => {
        cy.visit(tokenUrl);
        cy.get('[aria-controls="radix-:r14:"]').click();
        cy.contains('Canceled').click();
        cy.get('.tour-meeting-filter > .inline-flex').click();
      });
    });

    describe('Verify copied URL to Instant Meeting', () => {
      const copiedURL = 'https://meet.google.com/rwd-ppwt-bxy';

      it('should copy and paste the URL correctly into the input field', () => {
        cy.visit("https://app.meetmemo.ai/verify_token?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNywibmFtZSI6Im1hYWtoYW4uZW5wb2ludGUiLCJwcm9maWxlX3BpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKMzlWb3RCdjlwWGlGOFg2VE5ydnNvaG5xRHNpbUJacTZFc3phaVoxRzMySDVUaXc9czk2LWMiLCJvcmdhbml6YXRpb25faWQiOiIzZDM3OWJkOC0wYmVkLTQ1MzQtOWIzYS04MzIxNzEwNWZhZDEiLCJpYXQiOjE3NDM4NDYxNzYsImV4cCI6MTc0NjQzODE3Nn0.-YtEklseMje-fHzVSLsD62Ecym8PWEx3zOX4vpX6V4g");

        cy.url().should('include', '/dashboard');
        cy.get('body > div > div:nth-of-type(2) > div > div > section > div:nth-of-type(2) > div > div > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > button')
          .click();

        cy.get('.flex.max-w-7xl > .flex-col > .items-center').click();


        cy.get('.space-y-6 > :nth-child(1) > .flex').type('Test title');

        cy.window().then((win) => {

          cy.stub(win.navigator.clipboard, 'writeText').callsFake((text) => {
            expect(text).to.equal(copiedURL);
          });
        });

        cy.get('.space-y-6 > :nth-child(2) > .flex')
          .clear()
          .type(copiedURL);

        cy.get('.space-y-6 > :nth-child(2) > .flex')
          .should('have.value', copiedURL);

        cy.get('.space-y-6 > .inline-flex').click();

      });
    });

    describe('Verify Dashboard', () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNywibmFtZSI6Im1hYWtoYW4uZW5wb2ludGUiLCJwcm9maWxlX3BpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKMzlWb3RCdjlwWGlGOFg2VE5ydnNvaG5xRHNpbUJacTZFc3phaVoxRzMySDVUaXc9czk2LWMiLCJvcmdhbml6YXRpb25faWQiOiIzZDM3OWJkOC0wYmVkLTQ1MzQtOWIzYS04MzIxNzEwNWZhZDEiLCJpYXQiOjE3NDM4NDYxNzYsImV4cCI6MTc0NjQzODE3Nn0.-YtEklseMje-fHzVSLsD62Ecym8PWEx3zOX4vpX6V4g";

      beforeEach(() => {

        cy.visit(`https://app.meetmemo.ai/verify_token?token=${token}`);
        cy.url().should('include', '/dashboard');
      });

      it('should verify Assign Template flow', () => {

        cy.visit("https://app.meetmemo.ai/meeting/2bbe18a0-ea67-4673-91ac-3fed7d855938")
        cy.url().should('include', '/meeting/2bbe18a0-ea67-4673-91ac-3fed7d855938');

        cy.get('button[role=combobox]').click();
    
      cy.contains('project update').click()
      cy.reload()
      cy.get('button[role=combobox]').click();
     
      cy.get('#\\:rc\\: > .capitalize').click();

      });

      it('should verify Assign Space flow', () => {
        // Click on "Assign Space"
        cy.contains('Assign Space').click();
        cy.url().should('include', '/dashboard');

        cy.contains('Test Card').click();
        cy.reload();

        cy.contains('Test Card').click();
        cy.url().should('include', '/spaces');

        cy.get('.max-w-7xl > :nth-child(1) > .flex').click();

        cy.contains('Assign Space').click();
        cy.url().should('include', '/dashboard');

        cy.get("body > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div > div > div > div > div").click();
        cy.url().should('include', '/dashboard');
      });
    });


    describe('Verify Calendar', () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNywibmFtZSI6Im1hYWtoYW4uZW5wb2ludGUiLCJwcm9maWxlX3BpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKMzlWb3RCdjlwWGlGOFg2VE5ydnNvaG5xRHNpbUJacTZFc3phaVoxRzMySDVUaXc9czk2LWMiLCJvcmdhbml6YXRpb25faWQiOiIzZDM3OWJkOC0wYmVkLTQ1MzQtOWIzYS04MzIxNzEwNWZhZDEiLCJpYXQiOjE3NDM4NDYxNzYsImV4cCI6MTc0NjQzODE3Nn0.-YtEklseMje-fHzVSLsD62Ecym8PWEx3zOX4vpX6V4g";

      // Passed token
      beforeEach(() => {
        cy.visit(`https://app.meetmemo.ai/verify_token?token=${token}`);
        cy.contains("Maakhan.enpointe");
        cy.url().should('include', '/dashboard');
      });

      it('should verify the Calendar flow', () => {

        cy.get('.hidden > [href="/calendar"]').click();
        cy.contains("Today");
        cy.url().should('include', '/calendar');

        cy.get('.second-step > :nth-child(3)').click();
        cy.contains("Today");
        cy.url().should('include', '/calendar');

        cy.get('.second-step > :nth-child(3)').click();
        cy.contains("Today");
        cy.url().should('include', '/calendar');

        cy.get('.second-step > .px-4').click();
        cy.contains("Sun");
        cy.url().should('include', '/calendar');

        cy.scrollTo(0, 500);
        cy.get('body > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div:nth-of-type(2) > button').click();
        cy.contains("Daily");
        cy.url().should('include', '/calendar');

        cy.contains('Daily').click();
        cy.contains("Daily");

        cy.get('body > div > div:nth-of-type(2) > div > div > div:nth-of-type(1) > div:nth-of-type(2) > button').click();
        cy.contains("Monthly");
        cy.url().should('include', '/calendar');

        cy.contains('Weekly').click();
        cy.contains("Today");
      });
    });

    describe('Verify Profile', () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNywibmFtZSI6Im1hYWtoYW4uZW5wb2ludGUiLCJwcm9maWxlX3BpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKMzlWb3RCdjlwWGlGOFg2VE5ydnNvaG5xRHNpbUJacTZFc3phaVoxRzMySDVUaXc9czk2LWMiLCJvcmdhbml6YXRpb25faWQiOiIzZDM3OWJkOC0wYmVkLTQ1MzQtOWIzYS04MzIxNzEwNWZhZDEiLCJpYXQiOjE3NDM4NDYxNzYsImV4cCI6MTc0NjQzODE3Nn0.-YtEklseMje-fHzVSLsD62Ecym8PWEx3zOX4vpX6V4g";

      beforeEach(() => {
        cy.visit(`https://app.meetmemo.ai/verify_token?token=${token}`);
        cy.contains("Maakhan.enpointe");
        cy.url().should('include', '/dashboard');
      });

      it('verify Edit and save profile', () => {
        cy.url().should('include', '/dashboard');

        cy.get('.rounded-md > .relative > .flex').click()
        cy.get('.py-1 > :nth-child(2)').click()
        cy.get('body > div:nth-of-type(3) > form > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(1) > div > div:nth-of-type(2) > input').type('gupta')
        cy.get('body > div:nth-of-type(3) > form > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(5) > textarea').type('Test Input')
        cy.get('#radix-\\:r7\\: > form > div:nth-of-type(2) > button:nth-of-type(2)').click()

        cy.get('.rounded-md > .relative > .flex').click()
        cy.get('.py-1 > :nth-child(2)').click()
        cy.get('body > div:nth-of-type(3) > form > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(1) > div > div:nth-of-type(2) > input').type('{backspace}{backspace}{backspace}{backspace}{backspace}')
        cy.get('body > div:nth-of-type(3) > form > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(5) > textarea').clear()
        cy.get('#radix-\\:r7\\: > form > div:nth-of-type(2) > button:nth-of-type(2)').click()

      });
    })

    describe('Verify share button', () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNywibmFtZSI6Im1hYWtoYW4uZW5wb2ludGUiLCJwcm9maWxlX3BpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKMzlWb3RCdjlwWGlGOFg2VE5ydnNvaG5xRHNpbUJacTZFc3phaVoxRzMySDVUaXc9czk2LWMiLCJvcmdhbml6YXRpb25faWQiOiIzZDM3OWJkOC0wYmVkLTQ1MzQtOWIzYS04MzIxNzEwNWZhZDEiLCJpYXQiOjE3NDM4NDYxNzYsImV4cCI6MTc0NjQzODE3Nn0.-YtEklseMje-fHzVSLsD62Ecym8PWEx3zOX4vpX6V4g";

      beforeEach(() => {
        cy.visit(`https://app.meetmemo.ai/verify_token?token=${token}`);
        cy.contains("Maakhan.enpointe");
        cy.url().should('include', '/dashboard');
      });

      it('Share button func', () => {

        cy.visit("https://app.meetmemo.ai/meeting/2bbe18a0-ea67-4673-91ac-3fed7d855938")
        cy.url().should('include', '/meeting/2bbe18a0-ea67-4673-91ac-3fed7d855938');

        cy.get('.tour-meeting-page-share').click();

        cy.get("input[placeholder='Add people emails here..']").type("Testmail@gmail.com")

        cy.get("button[class='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10'] svg")
          .click()

        cy.get("button[class='justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-2']")
          .click()

        cy.contains('Done').click()

        cy.get(".lucide.lucide-x.h-4.w-4").click()

        cy.get('.tour-meeting-page-share').click();

        cy.get("button[class='inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md p-1']").click()

        cy.contains('Done').click()

        cy.get(".lucide.lucide-x.h-4.w-4").click()

      });
    })

    describe('Verify Bot', () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNywibmFtZSI6Im1hYWtoYW4uZW5wb2ludGUiLCJwcm9maWxlX3BpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKMzlWb3RCdjlwWGlGOFg2VE5ydnNvaG5xRHNpbUJacTZFc3phaVoxRzMySDVUaXc9czk2LWMiLCJvcmdhbml6YXRpb25faWQiOiIzZDM3OWJkOC0wYmVkLTQ1MzQtOWIzYS04MzIxNzEwNWZhZDEiLCJpYXQiOjE3NDM4NDYxNzYsImV4cCI6MTc0NjQzODE3Nn0.-YtEklseMje-fHzVSLsD62Ecym8PWEx3zOX4vpX6V4g";

      beforeEach(() => {
        cy.visit(`https://app.meetmemo.ai/verify_token?token=${token}`);
        cy.contains("Maakhan.enpointe");
        cy.url().should('include', '/dashboard');
      });
      it('Change bot name', () => {

        cy.get('.rounded-md > .relative > .flex').click()

      cy.get('.py-1 > :nth-child(2)').click()

      cy.get('#bot_name').click().clear().type('Test_Bot_Name')

      cy.get('button[type=submit]').click()

      cy.get('.rounded-md > .relative > .flex').click()

      cy.get('.py-1 > :nth-child(2)').click()

      cy.get('#bot_name').click().clear().type('MemoMaster')

      cy.get('button[type=submit]').click()

      })
    })

    describe('Verify Space page', () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNywibmFtZSI6Im1hYWtoYW4uZW5wb2ludGUiLCJwcm9maWxlX3BpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKMzlWb3RCdjlwWGlGOFg2VE5ydnNvaG5xRHNpbUJacTZFc3phaVoxRzMySDVUaXc9czk2LWMiLCJvcmdhbml6YXRpb25faWQiOiIzZDM3OWJkOC0wYmVkLTQ1MzQtOWIzYS04MzIxNzEwNWZhZDEiLCJpYXQiOjE3NDM4NDYxNzYsImV4cCI6MTc0NjQzODE3Nn0.-YtEklseMje-fHzVSLsD62Ecym8PWEx3zOX4vpX6V4g";

      beforeEach(() => {
        cy.visit(`https://app.meetmemo.ai/verify_token?token=${token}`);
        cy.contains("Maakhan.enpointe");
        cy.url().should('include', '/dashboard');
      });
      it('Edit Space', () => {
        cy.visit("https://app.meetmemo.ai/spaces");
        cy.url().should('include', '/spaces');

        cy.get('.lucide.lucide-pencil.h-4.w-4').click()
        cy.get('input[value="Test Card"]').click().clear().type('Demo card')
        cy.get('button:nth-child(4)').click()
        cy.get('textarea[name=space_description]').click().type('MeetMemo is wonderful')
        cy.get('button[type=submit]').click()
  
        cy.get('.lucide.lucide-pencil.h-4.w-4').click()
        cy.get('input[value="Demo card"]').click().clear().type('Test Card')
        cy.get('div[class="grid grid-cols-5 gap-4 p-10 rounded-md"] button:nth-child(1)').click()
        cy.get('textarea[name=space_description]').click().clear()
        cy.get('button[type=submit]').click()

      })

      it('Add and delete Space', () => {
        cy.visit("https://app.meetmemo.ai/spaces");
        cy.url().should('include', '/spaces');

    })
  })

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })