"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const DigitalProduct_1 = require("./models/DigitalProduct");
const products = [
    new PhysicalProduct_1.PhysicalProduct("SKU001", "Laptop", 1000, 2.5),
    new DigitalProduct_1.DigitalProduct("SKU002", "E-Book", 20, 5)
];
for (const product of products) {
    console.log("**********************");
    console.log(product.displayDetails());
    if (product instanceof PhysicalProduct_1.PhysicalProduct) {
        console.log("WEIGHT: " + product.formattedWeight);
    }
    if (product instanceof DigitalProduct_1.DigitalProduct) {
        console.log("FILE SIZE: " + product.formattedFileSize);
    }
    console.log("PRICE W/ TAX: $" + product.getPriceWithTax());
}
