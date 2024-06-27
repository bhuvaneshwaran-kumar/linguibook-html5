import { updateVocabDataComplete } from "../actions";
import { sendSocketMessage } from "../socket";

export const autosaveMiddleware = (store) => next => action => {

    const { type } = action;
    switch (type) { 
        case "UPDATE_VOCAB_DATA": { 
            sendSocketMessage("updateVocabData", action.data);
            store.dispatch(updateVocabDataComplete(action.data));
            break;
        }
        default: 
            break;
    }
    return next(action);
}