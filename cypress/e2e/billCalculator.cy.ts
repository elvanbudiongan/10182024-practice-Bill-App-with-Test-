// https://on.cypress.io/api

describe('My Bill Calculator E2E tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })
});

it('should have initial inputs empty and total as 0', () => {
  cy.wait(1000);
  cy.get('[data-testid="price-input"]').eq(0).should('have.value', '');
  cy.get('[data-testid="tip-input"]').eq(1).should('have.value', '');
  cy.contains('Total: $ 0.00').should('exist');
});


it('should update the Total when price and tip are inputed', () => {
  cy.get('input[type="number"]').eq(0).clear().type('99');
  cy.get('input[type="number"]').eq(1).clear().type('16');
  cy.contains('Total: $115').should('exist');
})

it('should reset price and tip when the currency is changed', () => {
  cy.get('select').select('PHP');
  cy.get('input[type="number"]').eq(0).should('have.value' , '');
  cy.get('input[type="number"]').eq(1).should('have.value' , '');
})

it('should display correct currency symbol' , () => {
  cy.get('input[type="number"]').eq(0).clear().type('99');
  cy.get('input[type="number"]').eq(1).clear().type('16');

  cy.get('select').select('PHP');
  cy.contains('₱115').should('exist')

  cy.get('select').select('YEN');
  cy.contains('¥115').should('exist')

})

it('should change the color of total based on value that been conditioned', () => {
  cy.get('input[type="number"]').eq(0).clear().type('99');
  cy.get('input[type="number"]').eq(1).clear().type('16');
  cy.get('p').should('have.css', 'color', 'rgb(0,0,0)' );

  cy.get('input[type="number"]').eq(0).clear().type('12');
  cy.get('input[type="number"]').eq(1).clear().type('16');
  cy.get('p').should('have.css', 'color', 'rgb(255, 0, 0)' );

  cy.get('input[type="number"]').eq(0).clear().type('450');
  cy.get('input[type="number"]').eq(1).clear().type('50');
  cy.get('p').should('have.css', 'color', 'rgb(0, 128, 0)');
})
