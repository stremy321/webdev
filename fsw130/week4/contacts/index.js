const redux = require("redux")


function addName(name) {
    return {
        type: "ADD_NAME",
        payload: name
    }
}

function addNumber(number) {
    return {
        type: "ADD_NUMBER",
        payload: number
    }
}
function addEmail(email) {
    return {
        type: "ADD_EMAIL",
        payload: email
    }
}

function deleteName(name) {
    return {
        type: "DELETE_NAME",
        payload: name
    }    
}

function deleteNumber(number) {
    return {
        type: "DELETE_NUMBER",
        payload: number
    }
}

function deleteEmail(email) {
    return {
        type: "DELETE_EMAIL",
        payload: email
    }    
}



const initialState = { 
    name: "",
    number: "",
    email: "",
}


function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_NAME": 
        return {
            ...state,
            name: [...state.name, action.payload]
        }
        
        case "ADD_NUMBER": 
        return {
            ...state,
            number: [...state.number, action.payload]
        }

        case "ADD_EMAIL": 
        return {
            ...state,
            name: [...state.email, action.payload]
        }
        
        case "DELETE_NAME":
            const updatedName = state.name.filter(name => name.toLowerCase() !==
            action.payload.toLowerCase())
            return {
                ...state,
                name: updatedName
            }
        
        case "DELETE_NUMBER":
            const updatedNumber = state.name.filter(number => number !== action.payload)
            return {
                ...state,
                number: updatedNumber
            }

        case "DELETE_EMAIL":
            const updatedEmail = state.name.filter(email => email !== action.payload)
            return {
                ...state,
                 number: updatedEmail 
            }        

            
            default: 
            return state
    }
}


const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addName("Jessica Stremy"))
store.dispatch(addNumber("785-431-5575"))
store.dispatch(addEmail("bubble321@gmail.com"))

store.dispatch(addName("Christopher Drayton"))
store.dispatch(addNumber("305-763-0063"))
store.dispatch(addEmail("drayton0063@yahoo.com"))

store.dispatch(addName("Alex Williams"))
store.dispatch(addNumber("954-837-0231"))
store.dispatch(addEmail("alwilliams@gmail.com"))

