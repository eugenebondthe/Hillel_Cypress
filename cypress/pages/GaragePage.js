import { BasePage } from "./BasePage";

export class GaragePage extends BasePage {
  addCarButton() {
    return cy.xpath(`//button[contains(text(), 'Add car')]
        `);
  }

  carBrandSelector() {
    return cy.xpath(`//select[@id='addCarBrand']`);
  }

  carModelSelector() {
    return cy.xpath(`//select[@id='addCarModel']`);
  }

  mileageInput() {
    return cy.xpath(`//input[@name="mileage"]`);
  }

  carCreatedDateInput() {
    return cy.xpath(`//input[@id="carCreationDate"]`);
  }

  addButton() {
    return cy.xpath(`//button[text()="Add"]`);
  }

  cancelButton() {
    return cy.xpath(`//button[text()="Cancel"]`);
  }

  closeButton() {
    return cy.xpath(`//button[@class="close"]`);
  }

  removeCarButton() {
    return cy.xpath(`//button[@class="btn btn-outline-danger"]`);
  }

  addFuelExpenseButton() {
    return cy.xpath(`//button[@class="car_add-expense btn btn-success"]`);
  }

  vehicleSelector() {
    return cy.xpath(`//select[@name="carId"]`);
  }

  reportDateInput() {
    return cy.xpath(`//input[@id="addExpenseDate"]`);
  }

  numberOfLitersInput() {
    return cy.xpath(`//input[@id="addExpenseLiters"]`);
  }

  totalExpenseCostInput() {
    return cy.xpath(`//input[@name="totalCost"]`);
  }

  editCarButton() {
    return cy.xpath(`//button[@class="car_edit btn btn-edit"]`);
  }

  milageUpdateInput() {
    return cy.xpath(`//input[@name="miles"]`);
  }

  milageUpdateButton() {
    return cy.xpath(`//button[@type="submit"]`);
  }
}
