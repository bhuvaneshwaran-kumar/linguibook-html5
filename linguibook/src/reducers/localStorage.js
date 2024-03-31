import { fromJS } from "immutable"
const initialState = fromJS({
    user: {
        name: "",
        bio: "",
        profileUrl: "",
        _id: ""
    },
    appLoadStatus: {
        isLoading: true,
        loadPercent: 0,
    },
    auth: {
        isLogged: false,
        isLoading: false
    }
})

const localStorage = (state = initialState, action) => { 
    switch (action.type) { 
        case "UPDATE_USER_DATA": { 
            const { data: user } = action;
            state = state.update("user", (userDet) => userDet.merge(user));
            return state;
        }
        case "UPDATE_APP_LOAD": {
            const { isLoading, loadPercent } = action.data;
            state = state.update("appLoadStatus", (loadData) => loadData.merge({ isLoading, loadPercent }));
            return state;
        }
        case "UPDATE_USER_AUTH": {
            const { isLogged, isLoading } = action.data;
            state = state.update("auth", (authData) => authData.merge({ isLogged, isLoading }));
            return state;
        }
        default : 
            return state;
    }
}

export default localStorage