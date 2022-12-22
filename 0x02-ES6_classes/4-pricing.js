 import Currency from "./3-currency";

 export default class Pricing {
    //constructor
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    //Getter for amount
    get amount() {
        return this._amount;
    }
    //setter for amount
    set amount(value) {
        this._amount = value;
    }

    //Getter for currency
    get currency() {
        return this._currency;
    }
    //setter for currency
    set currency(value) {
        this._currency = value;
    }

    //Method
    displayFullPrice() {
        return `${this.amount} ${this.currency.displayFullCurrency()}`;
    }

    //static method
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
 }