import { OrderedMap, fromJS } from "immutable"
const initialState = fromJS({
    context: {
        id: "",
        data: OrderedMap({})
    },
    vocabularies: OrderedMap({}),
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
        case "UPDATE_VOCABULARIES": { 
            const { vocabularies } = action.data;
            state = state.update("vocabularies", (vocData) => vocData.merge(vocabularies));
            return state;
        }
        case "SET_VOCABULARIES": { 
            const { contextId, vocabularies } = action.data;
            state = state.set("vocabularies", vocabularies);
            state = state.setIn(["context", "id"], contextId);
            return state;
        }
        case "UPDATE_VOCAB_DATA_COMPLETE": {
            const { isLiked, userId, vocabId } = action.data;
            state = state.setIn(["vocabularies", vocabId, "isLiked"], isLiked);
            return state;
        }
        default : 
            return state;
    }
}

export default vocabulariesStorage