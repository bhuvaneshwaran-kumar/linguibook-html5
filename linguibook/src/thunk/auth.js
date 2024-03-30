import axios from 'axios';
import { API_URI } from '../utils/constant';
import { updateAppLoad, updateUserAuth } from '../actions';

// Example thunk action creator
export const checkUserAuth = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post(`${API_URI}/api/auth/refresh`);
            // Process response if needed
            return true;
        } catch (error) {
            await dispatch(updateAppLoad({ isLoading: false, loadPercent: 0 }));
            await dispatch(updateUserAuth({ isLogged: false }));
            return false;
        }
    };
};
