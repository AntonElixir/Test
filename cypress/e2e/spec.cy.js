import {COUNTER_APP_TEST_IDS} from "../../src/testids"


describe('counter testing', () => {
  it('validate elements', () => {
    cy.visit('http://localhost:3000')
    cy.get(`[data-testid="${COUNTER_APP_TEST_IDS.title}"]`).contains(10)
    cy.get(`[data-testid="${COUNTER_APP_TEST_IDS.buttonReset}"]`).contains('Reset');
  })
})