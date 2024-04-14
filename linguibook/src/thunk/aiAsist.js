import { setLoader, updateAiConvo } from "../actions";
import { axiosWithAuthToken as authAxios } from "../utils/interceptors"

export const getAiMessage = (promptText) => {
    return async (dispatch) => {
        try {
            await dispatch(updateAiConvo({ from: "user", msg: promptText }))
            await dispatch(setLoader({ isAiMsgLoading: true }));
            let payLoad = { promptText };
            const result = await authAxios.post("/api/ai/generate", payLoad);
            await dispatch(updateAiConvo({ from: "ai", msg: result.data.data.result }))
        } catch (err) {
            // handle error message
        } finally {
            await dispatch(setLoader({ isAiMsgLoading: false }));
        }
    }
}