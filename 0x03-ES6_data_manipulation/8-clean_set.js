const cleanSet = (set, startString) => {
    //returns a string of all the set values that start with a specific string
    let result = "";
    for (const value of set.values()) {
        if (value.startsWith(startString)) {
            result += value.substring(startString.length);
        }
    }
    return result;
}
export default cleanSet;
