import axios from 'axios';
import {gameDetailsURL, gameScreenshotURL} from '../api'
import detailReducer from '../reducers/detailReducer';


// Get details of games 

export const loadDetail = (id) => async (dispatch) => {
    dispatch({
        type: "LOADING_DETAIL",
    });
    
    const detailData = await axios.get(gameDetailsURL(id));
    const screenShotData = await axios.get(gameScreenshotURL(id));

    
    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenShotData.data,
        }
    });
};

