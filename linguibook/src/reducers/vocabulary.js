import { fromJS } from "immutable"
const initialState = fromJS({
    context: {
        id: "",
        data: {}
    },
    vocabularies: {}
})

const vocabulariesStorage = (state = initialState, action) => { 
    switch (action.type) { 
        case "UPDATE_CONTEXT_DATA": { 
            const { id, data } = action.data;
            if (data) { 
                state = state.updateIn(["context", "data"], (ctxtData) => ctxtData.merge(data));
            }
            state = state.setIn(["context", "id"], id);
            return state;
        }
        case "UPDATE_VOCABULARIES_COMPLETE": { 
            const { vocabularies } = action.data;
            state = state.update("vocabularies", (vocData) => vocData.merge(vocabularies));
            return state;
        }
        default : 
            return state;
    }
}

export default vocabulariesStorage