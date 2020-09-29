const GETALLDOCS = "[irr_docs] getting irr docs"
const GETALLTYPES = "[irr_types] getting irr types"

const getAllDocs = (payload) => ({
    type: GETALLDOCS,
    payload
})

const getAllTypes = (payload) =>({
    type: GETALLTYPES,
    payload
})

const docUrl = "http://localhost:3001/podst_niepr"
const typeUrl = "http://localhost:3001/Rodzaj_N"

const getItems = async (url) => {

    const result = await fetch(url)
    const list = await result.json();

    return list;
}


const fetchAllDocs = () => (dispatch) => {
    getItems(docUrl).then(result => dispatch(getAllDocs(result)))
}

const fetchAllTypes = () => (dispatch) => {
    getItems(typeUrl).then(result => dispatch(getAllTypes(result)))
}

export { GETALLDOCS, GETALLTYPES, fetchAllDocs, fetchAllTypes }