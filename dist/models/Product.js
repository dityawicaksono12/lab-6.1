"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `${this.sku}, ${this.name}, $${this.price}`;
    }
    getPriceWithTax() {
        return this.price;
    }
}
exports.Product = Product;
