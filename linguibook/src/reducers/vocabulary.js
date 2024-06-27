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
            const { isLiked, userId, vocabId, likesCount } = action.data;
            if (isLiked !== undefined) { 
                state = state.setIn(["vocabularies", vocabId, "isLiked"], isLiked);
                state = state.updateIn(["vocabularies", vocabId, "likesCount"], (value) => isLiked ? value + 1 : value - 1);
            }
            if (likesCount !== undefined) { 
                state = state.updateIn(["vocabularies", vocabId, "likesCount"], (value) => value + likesCount);
            }
            return state;
        }
        default : 
            return state;
    }
}

export default vocabulariesStorage