// https://on.cypress.io/api

describe('My Bill Calculator E2E tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })


it('should have initial inputs empty and total as 0', () => {
  cy.get('#price-input').should('have.value' , '0')
  cy.get('#tip-input').should('have.value' , '0')
  cy.get('#total-display')
  .invoke('text')
  .then((text) => {
    expect(text.trim()).to.equal('Total: $ 0.00');
  });
});


it('should update the Total when price and tip are inputed', () => {
  cy.get('#price-input').clear().type('99');
  cy.get('#tip-input').clear().type('16');
  cy.get('#total-display')
  .invoke('text')
  .then((text) => {
    expect(text.trim()).to.equal('Total: $ 115.00');
  });
})

it('should reset price and tip when the currency is changed', () => {
  cy.get('select').select('PHP');
  cy.get('#price-input').should('have.value' , '0')
  cy.get('#tip-input').should('have.value' , '0')
})

// it('should display correct currency symbol' , () => {
//   cy.get('#price-input').clear().type('99');
//   cy.get('#tip-input').clear().type('16');

//   cy.get('select').select('PHP');
//   cy.get('#total-display')
//   .invoke('text')
//   .then((text) => {
//     expect(text.trim()).to.equal('Total: ₱');
//   });


//   cy.get('select').select('YEN');
//   cy.get('#total-display')
//   .invoke('text')
//   .then((text) => {
//     expect(text.trim()).to.equal('Total: ¥');
//   });

// })

it('should change the color of total based on value that been conditioned', () => {
  cy.get('#price-input').clear().type('99');
  cy.get('#tip-input').clear().type('16');
  cy.get('#total-display').should('have.css', 'color').and('equal','rgb(0, 0, 0)');

  cy.get('#price-input').clear().type('12');
  cy.get('#tip-input').clear().type('16');
  cy.get('#total-display').should('have.css', 'color').and('equal', 'rgb(255, 0, 0)');

  cy.get('#price-input').clear().type('950');
  cy.get('#tip-input').clear().type('50');
  cy.get('#total-display').should('have.css', 'color').and('equal', 'rgb(0, 128, 0)');
})
})


