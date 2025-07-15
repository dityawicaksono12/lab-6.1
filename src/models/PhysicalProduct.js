"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
const Product_1 = require("./Product");
class PhysicalProduct extends Product_1.Product {
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    getPriceWithTax() {
        return this.price * 1.1;
    }
    get formattedWeight() {
        return `${this.weight}kg`;
    }
}
exports.PhysicalProduct = PhysicalProduct;
