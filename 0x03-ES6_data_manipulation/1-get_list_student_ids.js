const getListStudentIds = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map((result) => {
            return result.id;
        })
    }
    return [];
    
}
export default getListStudentIds;
