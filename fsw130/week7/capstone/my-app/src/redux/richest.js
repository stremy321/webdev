import richList from "../dataArrays/richList"

export function addRich(Rich) {
    return {
        type: "ADD_RICH",
        payload: rich
    }
}

export function deleteRich(rich) {
    return {
        type: "DELETE_RICH",
        payload: rich
    }
}

function richReducer(richest = richList, action) {
    switch (action.type) {
        case "ADD_RICH":
            return [...richest, action.payload];
        case "DELETE_RICH": {
            const updatedArr = richest.filter (
                rich => rich.toLowerCase() !== action.payload.toLowerCase()
                );
                return updatedArr;
        }
        default: 
            return richest
    }
}

export default richReducer