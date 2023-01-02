const getListStudentIds = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map((result) => result.id);
    }
    return [];
    
}
export default getListStudentIds;
