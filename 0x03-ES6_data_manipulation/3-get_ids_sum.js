const getStudentIdsSum = (obj) => {
    /** returns the sum of all the student ids */
    const sumOfIds = obj.reduce((accumulator, currentValue) =>  
                    accumulator + currentValue.id, 0);

    return sumOfIds;
}
export default getStudentIdsSum;
