const createInt8TypedArray = (length, position, value ) => {

    if (position < 0 || position >= length) {
        throw new Error("Position outside range");
    }
    //Create a buffer with the specified length
    const buffer = new ArrayBuffer(length);

    //creates a new DataVew object that "views" the buffer as an array
    const newView = new DataView(buffer);
    newView.setInt8(position, value);

    // const int8Value = new Int8Array(buffer);


    return newView;
}
export default createInt8TypedArray;
