import {COUNTER_APP_TEST_IDS} from "../../src/testids"


describe('counter testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('validate UI elements', () => {
    cy.contains('CounterApp');
    cy.get(`[data-testid="${COUNTER_APP_TEST_IDS.title}"]`).contains(10);
    cy.get(`[data-testid="${COUNTER_APP_TEST_IDS.buttonPlus}"]`).contains('+1');
    cy.get(`[data-testid="${COUNTER_APP_TEST_IDS.buttonMinus}"]`).contains('-1');
    cy.get(`[data-testid="${COUNTER_APP_TEST_IDS.buttonReset}"]`).contains('Reset');
  })
  it('validate button plus', () => {
    cy.contains('CounterApp');
    cy.get(`[data-testid="${COUNTER_APP_TEST_IDS.title}"]`).contains(10);
    cy.get(`[data-testid="${COUNTER_APP_TEST_IDS.buttonPlus}"]`).click();
    cy.get(`[data-testid="${COUNTER_APP_TEST_IDS.title}"]`).contains(11);
  })
  it('validate button minus', () => {
    cy.contains('CounterApp');
    cy.get(`[data-testid="${COUNTER_APP_TEST_IDS.title}"]`).contains(10);
    cy.get(`[data-testid="${COUNTER_APP_TEST_IDS.buttonMinus}"]`).click();
    cy.get(`[data-testid="${COUNTER_APP_TEST_IDS.title}"]`).contains(9);
  })
  it('validate reset', () => {
    cy.get(`[data-testid="${COUNTER_APP_TEST_IDS.buttonReset}"]`).click();
    cy.get(`[data-testid="${COUNTER_APP_TEST_IDS.title}"]`).contains(10);
  })
})