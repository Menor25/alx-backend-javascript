const getStudentsByLocation = (obj, city) => {

    /** returns an array of objects who are located in a specific city */
    return obj.filter(result => result.location === city);
}
export default getStudentsByLocation;
