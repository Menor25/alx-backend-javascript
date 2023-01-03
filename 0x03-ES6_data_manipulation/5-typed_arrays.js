const createInt8TypedArray = (length, position, value ) => {

    if (position < 0 || position >= length) {
        throw new Error("Position outside range");
    }
    //Create a buffer with the specified length
    const buffer = new ArrayBuffer(length);

    //creates a new Int8Array object that "views" the buffer as an array of 8-bit integers
    const int8Value = new Int8Array(buffer);
    
    int8Value[position] = value;

    return buffer;
}
export default createInt8TypedArray;
