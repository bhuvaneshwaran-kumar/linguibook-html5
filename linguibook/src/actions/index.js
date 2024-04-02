/**
 * This module contains action creators.
 * @module actionCreaters
 */


export const updateAppLoad = (data) => ({
    type: "UPDATE_APP_LOAD",
    data
})

export const updateUserAuth = (data) => ({
    type: "UPDATE_USER_AUTH",
    data
})

export const updateUserData = (data) => ({
    type: "UPDATE_USER_DATA",
    data
})

export const updateContextData = (data) => ({
    type: "UPDATE_CONTEXT_DATA",
    data
})

export const updateVocabulariesComplete = (data) => ({
    type: "UPDATE_VOCABULARIES_COMPLETE",
    data
})
