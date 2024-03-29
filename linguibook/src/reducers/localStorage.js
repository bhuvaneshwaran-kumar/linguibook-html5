const initialState = {
    user: {
        name: "",
        bio: "",
        profileUrl: "",
        auth : {
            isLogged: false
        }
    } 
}

const localStorage = (state = initialState, action) => { 
    switch (action.type) { 
        case "UPDATE_USER_COMPLETE": { 
            return state;
        }
        default : 
            return state;
    }
}

export default localStorage