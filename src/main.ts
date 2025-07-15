import { calculateTax } from "./utils/taxCalculator";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";

const products = [
  new PhysicalProduct("SKU001", "Laptop", 1000, 2.5),
  new DigitalProduct("SKU002", "E-Book", 20, 5)
];

for (const product of products) {
  console.log("**********************")
  console.log(product.displayDetails())
  if (product instanceof PhysicalProduct) {
    console.log("WEIGHT: " + product.formattedWeight)
  }
  if (product instanceof DigitalProduct) {
    console.log("FILE SIZE: " + product.formattedFileSize)
  }
  console.log("PRICE W/ TAX: $" + calculateTax(product))
}
