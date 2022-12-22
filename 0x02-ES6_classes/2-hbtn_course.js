export default class HolbertonCourse {
    //constructor
    constructor(name, length, students){
        this.name = name;
        this.length = length;
        this.students = students;
    }

    //Getter for name
    get name() {
        return this._name;
    }
    //Set name
    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string')
        }
        this._name = value;
    }

    //Getter for length
    get length() {
        return this._length;
    }
    //Set length
    set length(value) {
        if (typeof value !== "number") {
            throw new TypeError("Length must be a number");
        }
        this._length = value;
    }

    //Get for students
    get students() {
        return this._students;
    }
    //Set students
    set students(value) {
        value.forEach((element) => {
            if (typeof element !== 'string') {
                throw new TypeError('Students must be an array of strings');
            }
        });
        this._students = value;
    }
}   