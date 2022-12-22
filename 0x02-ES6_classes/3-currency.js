export default class Currency {
    //constructor
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }

    //Get for code
    get code() {
        return this._code;
    }
    //Set code
    set code(value) {
        this._code = value;
    }

    //Get for name
    get name() {
        return this._name;
    }
    //Set name
    set name(value) {
        this._name = value;
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}