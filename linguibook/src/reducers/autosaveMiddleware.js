import { updateVocabDataComplete } from "../actions";

export const autosaveMiddleware = (store) => next => action => {

    const { type } = action;
    switch (type) { 
        case "UPDATE_VOCAB_DATA": { 
            console.log('UPDATE_VOCAB_DATA');
            store.dispatch(updateVocabDataComplete(action.data));
            break;
        }
        default: 
            break;
    }
    return next(action);
}