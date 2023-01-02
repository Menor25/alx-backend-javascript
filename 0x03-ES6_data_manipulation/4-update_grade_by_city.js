const updateStudentGradeByCity = (obj, city, newGrades) => {
    /** Returns an array of students for a specific city with their new grade */
    const location = obj.filter(result => result.location === city);
    if (location.some(grade => grade.newGrades === "")) {
        return location.grade.push('N/A');
    }
    const grades = location.map(grade => grade.newGrades);
    return grades;
}
export default updateStudentGradeByCity;
