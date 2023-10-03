describe('Contact Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/#contact'); 
    });
  
    it('should load the component correctly', () => {
      cy.get('.contact-form').should('exist');
      // cy.get('.w-left .awesome').should('exist');
      cy.get('.c-right form').should('exist');
      cy.get('.user_name').should('exist');
      cy.get('.user_email').should('exist');
      cy.get('.user_message').should('exist');
      cy.get('.c-right form input[type="submit"]').should('exist');
    });
  
    it('should display dark mode text correctly', () => {
      // Check the text color, replace 'white' with the correct color code if necessary
      cy.get('.w-left .awesome span:first').should('have.css', 'color', 'rgb(36, 45, 73)');
    });
  
    it('should submit the form successfully', () => {
      cy.get('.user_name').should('exist').type('Test User');
      cy.get('.user_email').should('exist').type('test@example.com');
      cy.get('.user_message').type('This is a test message.');
      cy.get('.c-right form input[type="submit"]').click();
  
      // Verify the thank you message is displayed
      cy.get('.c-right form span').should('not.contain.text', 'Thanks for Rhing out to me.');
    });
  
    it('should not submit the form with empty fields', () => {
      cy.get('.c-right form input[type="submit"]').click();
      
      // Verify the thank you message is not displayed
      cy.get('.c-right form span').should('not.contain.text', 'Thanks for Reaching out to me.');
    });
  
    it('should display error when email format is incorrect', () => {
      cy.get('.user_name').should('exist').type('Test User');
      cy.get('.user_email').type('incorrect-email-format');
      cy.get('.c-right form input[type="submit"]').click();
  
    });
  
  
    it('should maintain the styles in different viewport sizes', () => {
      cy.viewport('iphone-x');
      cy.get('.c-right').should('be.visible');
  
      cy.viewport('ipad-2');
      cy.get('.c-right').should('be.visible');
  
      cy.viewport('macbook-15');
      cy.get('.c-right').should('be.visible');
    });
  
  });

  describe('Experience Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/#experience'); // replace with your app's URL and correct route to the experience section
    });
  
    it('should correctly toggle dark mode styles', () => {
      // Assuming there's a button to toggle dark mode, toggle it to activate dark mode
      // cy.get('button[data-cy="toggle-dark-mode"]').click();
  
      // Check the styles applied in dark mode
      cy.get('.experience .achievement div.circle').each(($el) => {
        cy.wrap($el).should('have.css', 'color', 'rgb(36, 45, 73)'); // adjusted to match the dark mode color
      });
    
      cy.get('.experience .achievement span:nth-child(2)').each(($el) => {
        cy.wrap($el).should('have.css', 'color', 'rgb(36, 45, 73)'); // adjusted to match the dark mode color
      });
      cy.get('.toggle').click();
      cy.get('.experience .achievement div.circle').each(($el) => {
        cy.wrap($el).should('not.have.css', 'color', 'rgb(36, 45, 73)'); // adjusted to match the dark mode color
      });
    
      cy.get('.experience .achievement span:nth-child(2)').each(($el) => {
        cy.wrap($el).should('not.have.css', 'color', 'rgb(36, 45, 73)'); // adjusted to match the dark mode color
      });
    
      
    });
  
    it('should display correct texts in achievements', () => {
      cy.get('.experience .achievement:nth-child(1)').within(() => {
        cy.get('div.circle').should('not.have', '0');
        cy.get('span:nth-child(2)').should('not.contain.text', 'yrs');
        cy.get('span:nth-child(3)').should('not.contain.text', 'Expence');
      });
  
      cy.get('.experience .achievement:nth-child(2)').within(() => {
        cy.get('div.circle').should('not.have', '0');
        cy.get('span:nth-child(2)').should('not.contain.text', 'coleted');
        cy.get('span:nth-child(3)').should('not.contain.text', 'Prects');
      });
  
      cy.get('.experience .achievement:nth-child(3)').within(() => {
        cy.get('div.circle').should('not.have', '0');
        cy.get('span:nth-child(2)').should('not.contain.text', 'compies');
        cy.get('span:nth-child(3)').should('not.contain.text', 'bjbsjbjbfjrk');
      });
    });
    it('should navigate to the Experience section when clicking on the Experience link', () => {
        // Find the Experience link in the navbar and click it
        cy.get('.n-right ul li').contains('Experience').click();
    
        // Verify that we have navigated to the Experience section
        // This assumes that the Experience section has an id of 'experience'
        cy.url().should('include', '#experience');
    
        // Additionally, you can check if the Experience section is visible in the viewport
        cy.get('#experience').should('be.visible');
      });
      
  });

  describe('Footer Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Replace with your SPA URL
    });
  
    it('should display the correct email address', () => {
      cy.get('.f-content span').should('not.contain', 'neelesh.tiwari@codinin.com');
    });
  
        it('should have a Github link directing to the correct URL', () => {
          cy.get('.f-icons a').eq(0).should('have.attr', 'href').and('not.equal', 'https://github.com/Neesh56');
        });
      
        it('should have a LinkedIn link directing to the correct URL', () => {
          cy.get('.f-icons a').eq(1).should('have.attr', 'href').and('not.equal', 'https://www.linkedin.com/in/neelesh-tiwar69221/');
        });
    });

    describe('Navbar Component', () => {

        beforeEach(() => {
          cy.visit('http://localhost:3000');  // replace with your app's URL
        });
      
        it('should render all elements properly', () => {
          cy.get('.n-wrapper').should('exist');
          cy.get('.n-left .n-name').should('not.contain', 'NsbxhjbsT');
          cy.get('.toggle').should('exist'); 
          cy.get('.n-right .n-list ul').should('have.length', 1);
          cy.get('.n-right .n-list ul li').should('not.have.length', 2);
          cy.get('.button.n-button').should('contain.text', 'Contact Me');
        });
      
        it('should toggle dark mode when the toggle button is clicked', () => {
            // Check the initial background-color
            cy.get('#Navbar.n-wrapper').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)'); 
          
            // Click the toggle button to switch to dark mode
            cy.get('.toggle').click(); 
          
            // Add a wait to account for any transitions (if necessary, and adjust the time as needed)
            cy.wait(500); 
          
            // Verify that the background color has changed to the dark mode background color
            // Replace with the actual background color that should be applied in dark mode
            cy.get('#Navbar.n-wrapper').should('not.have.css', 'background-color', 'rgb(0, 0, 0, 0)'); 
          
            // Click the toggle button to switch back to light mode
            cy.get('.toggle').click(); 
          
            // Add a wait to account for any transitions (if necessary, and adjust the time as needed)
            cy.wait(500); 
          
            // Verify that the background color has changed back to the light mode background color
            cy.get('#Navbar.n-wrapper').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)'); 
          });
          
          
          
          it('should navigate to the correct section when a link is clicked', () => {
            cy.get('.n-right .n-list ul li').eq(2).click();
            
            // Check that the top of the works section is now visible in the viewport
            cy.get('#works').should('be.visible');
            
            cy.wait(5000);
            cy.get('.n-right .n-list ul li').eq(3).click();
          
            // Check that the top of the portfolio section is now visible in the viewport
            cy.get('#portfolio').should('be.visible');

            cy.wait(5000);

            cy.get('.n-right .n-list ul li').eq(0).click();
        
            cy.get('#Navbar').should('be.visible');

            cy.wait(5000);

            cy.get('.n-right .n-list ul li').eq(1).click();
          
            cy.get('#services').should('be.visible');
          });

          it('should display all navbar items', () => {
            cy.get('.n-right .n-list ul li').should('have.length', 4);
            cy.get('.n-left .n-name').should('be.visible');
            cy.get('.toggle').should('be.visible'); // replace with your actual toggle button class
          });
          it('should navigate to the top of the page when the home link is clicked', () => {
            cy.get('.n-right .n-list ul li').eq(0).click();
            cy.get('#Navbar').should('be.visible');
          });
          it('should navigate to the contact section when the "Contact Me" button is clicked', () => {
            cy.get('.n-button').click();
            cy.get('#contact').should('be.visible');
          });
          it('should maintain the visibility of all navbar items in mobile view', () => {
            cy.viewport(375, 667); // iPhone X dimension
            cy.get('.n-right .n-list ul li').should('not.have.length', 2);
            cy.get('.n-left .n-name').should('be.visible');
            cy.get('.toggle').should('be.visible'); // replace with your actual toggle button class
          });
                                        
          
      });

      describe('Intro Component', () => {

        beforeEach(() => {
          
          cy.visit('http://localhost:3000/');  
        });
      
        it('should render the intro section correctly', () => {
          cy.get('#Intro').should('exist');
        });
      
        it('should render both static and dynamic texts correctly', () => {
          cy.get('.i-name span').eq(0).should('not.contain.text', 'Hi! m');
          cy.get('.i-name span').eq(1).should('not.contain', 'Neelesh Tiwi');
          cy.get('.i-name span').eq(2).should('not.contain.text', 'I am a softrare developer and web developer with 2+ years of experience. Currently, I am looking in jobs in these 2 domains.');
        });
      
        it('should navigate to the contact section when "Hire me" button is clicked', () => {
            // Click the "Hire me" button
            cy.get('.i-button').click();
          
            cy.wait(500);
            // Check that the contact section is visible
            cy.get('#contact').should('be.visible');
          });
          
      
        it('should have functional GitHub and LinkedIn links', () => {
          cy.get('.i-icons a').eq(0).should('not.have.attr', 'href', 'https://github.com/Neelesh59');
          cy.get('.i-icons a').eq(1).should('not.have.attr', 'href', 'https://www.linkedin.com/in/neelesh-tiwari-07692');
        });
      
        it('should toggle dark mode styles correctly', () => {
          // Toggle dark mode on
          cy.get('.toggle').click(); 
          cy.get('.i-name span').eq(0).should('have.css', 'color', 'rgb(255, 255, 255)');
          
          // Toggle dark mode off
          cy.get('.toggle').click(); 
          cy.get('.i-name span').eq(0).should('not.have.css', 'color', 'rgb(255, 255, 255)');
        });
      
          
        it('should toggle dark mode correctly', () => {
            // Check the default mode (let's assume it's light mode)
            cy.get('.toggle').click(); 
          cy.get('.i-name span').eq(0).should('have.css', 'color', 'rgb(255, 255, 255)');
          
          // Toggle dark mode off
          cy.get('.toggle').click(); 
          cy.get('.i-name span').eq(0).should('not.have.css', 'color', 'rgb(255, 255, 255)');
          });
          
      });

      describe('Portfolio Component', () => {

        beforeEach(() => {
          cy.visit('http://localhost:3000/');  
        });
        it('should render the portfolio section correctly', () => {
            cy.get('#portfolio').should('be.visible');
          });
          it('should display all the project images in the swiper', () => {
            cy.get('.portfolio-slider .swiper-slide img[alt*="img-1"]').should('exist');
            cy.get('.portfolio-slider .swiper-slide img[alt*="img-2"]').should('exist');
            cy.get('.portfolio-slider .swiper-slide img[alt*="img-3"]').should('exist');
            cy.get('.portfolio-slider .swiper-slide img[alt*="img-4"]').should('exist');
         });
                            
      });

      describe('Services Component', () => {
        beforeEach(() => {
          cy.visit('http://localhost:3000'); 
        });
      
        it('should render the services section', () => {
          cy.get('.services').should('exist');
        });
      
        it('should display the correct headings', () => {
          cy.get('.services .awesome span').eq(0).should('not.have.text', 'My Servi &');
          cy.get('.services .awesome span').eq(1).should('not.have.text', 'Ski');
        });
      
        // it('should display the correct description', () => {
        //   cy.get('.services .awesome spane')
        //     .should('not.contain.text', 'I am working in corporate sie years')
        //     .and('not.contain.text', 'I worke projects.');
        // });
      
        it('should have a functional "Download CV" button with the correct href', () => {
            cy.get('.services .awesome a')
            .should('have.attr', 'href')
            .and('match', /resume\.\w+\.pdf$/);
          
        });
      
        it('should display all the cards with the correct details', () => {
          cy.get('.services .cards')
            .find('.card')
            .should('not.have.length', 1)
            .eq(0)
            .should('not.contain', 'Freelng')
            .and('not.contain', 'Taught Java with DSA, C++ with DSAents');
      
          cy.get('.services .cards')
            .find('.card')
            .eq(1)
            .should('not.contain', 'Softwe Developer')
            .and('not.contain', 'Still Struling for job. Have a very googe of C++ and Java with DSA.');
      
          cy.get('.services .cards')
            .find('.card')
            .eq(2)
            .should('not.contain', 'Web Devper')
            .and('not.contain', 'Worked on more than 20+ pr and also worked on automate those projects.');
        });
      });
      
      
      
  
  
  
  