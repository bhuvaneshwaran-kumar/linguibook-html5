import { OrderedMap, fromJS } from "immutable"
const initialState = fromJS({
    communityLoadStatus: {
        isLoading: false,
        loadPercent: 0,
    },
    activeCommunity: {
        id: "",
        type: ""
    },
    userCommunites: OrderedMap({}),
    otherCommunites: OrderedMap({})
})

const communityStorage = (state = initialState, action) => { 
    switch (action.type) { 
        case "SET_ACTIVE_COMMUNITY_COMPLETE": {
            const { id, type } = action.data
            state = state.update("activeCommunity", (active) => active.merge(fromJS({ id, type })));
            return state;
        }
        case "UPDATE_COMMUNITY_LOAD": {
            const { isLoading } = action.data;
            state = state.update("communityLoadStatus", (loadData) => loadData.merge({ isLoading }));
            return state;
        }
        case "UPDATE_USER_COMMUNITY": {
            state = state.update("userCommunites", (community) => community.merge(action.data));
            return state;
        }
        case "UPDATE_OTHER_COMMUNITY": {
            state = state.update("otherCommunites", (community) => community.merge(action.data));
            return state;
        }
        default : 
            return state;
    }
}

export default communityStorage