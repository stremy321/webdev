function addTV(TV) {
    return {
        type: "ADD_TV",
        payload: tv
    }
}

function removeShow(tv) {
    return {
        type: "REMOVE_tv",
        payload: show
    }
}

function showReducer(show = [], action) {
    switch(action.type) {
        case "ADD_Tv":
            return [...state.tv, action.payload]
            
        case "REMOVE_TV":{
            const updatedArr = state.show.filter(show => show.toLowerCase() !==
            action.payload.toLowerCase())
            return updatedArr          
        }
        default: 
            return tv
    }
}

module.exports.tvReducer = tvReducer
module.exports = {addtv, removetv }