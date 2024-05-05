import { BasePage } from "./BasePage";

export class FuelExpensesPage extends BasePage {
  selectCarDropdown() {
    return cy.xpath(`//button[@id="carSelectDropdown"]`);
  }

  addFuelExpenseButton() {
    return cy.xpath(`//button[@class="btn btn-primary"]`);
  }

  fuelExpensesList() {
    return cy.xpath(`//table[@class="table expenses_table"]`);
  }

  fuelExpenseItem() {
    return cy.xpath(`//tr[contains(@class, 'font-weight-bold')]`);
  }

  editFuelExpenseButton() {
    return cy.xpath(`//button[@class="btn btn-edit"]`);
  }

  deleteFuelExpenseButton() {
    return cy.xpath(`//button[@class="btn btn-delete"]`);
  }

  vehicleSelector() {
    return cy.xpath(`//select[@name="carId"]`);
  }

  reportDateInput() {
    return cy.xpath(`//input[@id="addExpenseDate"]`);
  }

  mileageInput() {
    return cy.xpath(`//input[@name="mileage"]`);
  }

  numberOfLitersInput() {
    return cy.xpath(`//input[@id="addExpenseLiters"]`);
  }

  totalExpenseCostInput() {
    return cy.xpath(`//input[@name="totalCost"]`);
  }
}
