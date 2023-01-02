const updateStudentGradeByCity = (obj, city, newGrades) => {
    /** Returns an array of students for a specific city with their new grade */
    const location = obj.filter(result => result.location === city).location.map((student) => {
        const grades = newGrades.filter(x => x.studentId === student.id).map(i => i.grade)[0];
        const results = grades || 'N/A';
        return { ...student, results };
    });
}
export default updateStudentGradeByCity;
