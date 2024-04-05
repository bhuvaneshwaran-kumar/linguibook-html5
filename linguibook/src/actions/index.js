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

/**
 * 
 * @param {object} data 
 * @param {boolean} data.isVocChunkLoad
 * @param {boolean} data.isVocLoading 
 * @returns 
 */
export const setVocLoader = (data) => ({
    type: "SET_VOC_LOADER",
    data
})

export const updateVocabularies = (data) => ({
    type: "UPDATE_VOCABULARIES",
    data
})

export const setVocabularies = (data) => ({
    type: "SET_VOCABULARIES",
    data
})

export const updateVocabData = data => ({
    type: "UPDATE_VOCAB_DATA",
    data
})

export const updateVocabDataComplete = data => ({
    type: "UPDATE_VOCAB_DATA_COMPLETE",
    data
})
