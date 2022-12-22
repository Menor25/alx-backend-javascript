import Building from "./5-building";

export default class SkyHighBuilding extends Building {
    //constructor
    constructor(sqft, floors) {
        super(sqft);
        this.floors = floors;
    }

    //Getter for floors
    get floors() {
        return this._floors;
    }
    //setter for floors
    set floors(value) {
        this._floors = value;
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
    }
}