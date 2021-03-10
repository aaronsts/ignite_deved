const initialState = {game: {}, screenshot: {}, isLoading: true };

const detailReducer = (state= initialState, action) => {
    switch(action.type){
        case "GET_DETAIL":
            return{
                ...state,
                game: action.payload.game,
                screenshot: action.payload.screen,
                isLoading: false,
            };
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true,
            };
        default:
            return{...state}
    };
};

export default detailReducer;