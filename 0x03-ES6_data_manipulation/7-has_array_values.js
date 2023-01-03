const hasValuesFromArray = (set, array) => {
    // returns a boolean if all the elements in the array exist 
    for (const element of array) {
        if (!set.has(element)) {
            return false
        }
    }
    return true
}
export default hasValuesFromArray;
