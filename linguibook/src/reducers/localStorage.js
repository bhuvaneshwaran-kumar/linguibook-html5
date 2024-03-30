import { fromJS } from "immutable"
const initialState = fromJS({
    user: {
        name: "",
        bio: "",
        profileUrl: "",
    },
    appLoadStatus: {
        isLoading: true,
        loadPercent: 0,
    },
    auth: {
        isLogged: undefined
    }
})

const localStorage = (state = initialState, action) => { 
    switch (action.type) { 
        case "UPDATE_USER_DATA": { 
            return state;
        }
        case "UPDATE_APP_LOAD": {
            const { isLoading, loadPercent } = action.data;
            state = state.update("appLoadStatus", (loadData) => loadData.merge({ isLoading, loadPercent }));
            return state;
        }
        case "UPDATE_USER_AUTH": {
            const { isLogged } = action.data;
            state = state.update("auth", (authData) => authData.merge({ isLogged }));
            return state;
        }
        default : 
            return state;
    }
}

export default localStorage