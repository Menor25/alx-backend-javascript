interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string
}

let student1: Student = {
    firstName: "Menor",
    lastName: "Theo",
    age: 22,
    location: "Lagos State",
}

let student2: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 23,
    location: 'Benin City',
}

let studentsList: Student[] = [student1, student2];

//Creating table
let table = document.createElement('table');

//iterates over the element in the array
for (let i = 0; i < studentsList.length; i++) {

    //get the current student
    let student = studentsList[i];

    //create a new row for the student
    let row = table.insertRow();

    //inserting first name
    let firstNameCell = row.insertCell();
    firstNameCell.innerText = student.firstName;

    //inserting location
    let locationCell = row.insertCell();
    locationCell.innerText = student.lastName;
    
}