//Task 1
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

//Task 2
interface Directors extends Teacher {
    numberOfReports: number;
}

//Task 3
const printTeacher = (firstName: string, lastName: string) => {
    return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
    printTeacher(firstName: string, lastName: string): string;
}
