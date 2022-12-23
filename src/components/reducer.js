const reducer = (state, action) => {


    switch (action.type){
        case "GET_ALL_MOVIES":
            return{
                ...state,
                hits: action.payload.hits,
            }
        
        case "SET_LOADING":
            return {
                ...state,
                isLoading:false,
            }

        default: 
            return state;

    }

};

export default reducer;