describe('Оформление заказа', function () {
    
    it('Оформление заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="3"] > .header_collections-controls > .header_collections-link').click();
        cy.get('[data-product-id="338933807"] > .product-preview_content > .product-previewarea-title > .product-preview_title > a').click(); 
        cy.wait(500);
        cy.get('.add-cart-counter__btn').click();
        cy.wait(500);
        cy.get('[data-add-cart-counter-plus=""]').should('be.enabled');
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.header__cart > .icon').click(); 
        cy.get('.cart-controls > .button').click(); 
        cy.get('.decorated-title').contains('Оформление заказа');
         })  
        })