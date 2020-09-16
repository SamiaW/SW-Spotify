export const initialState = {
    user:null,
    playlists:['ABBA', 'Papa', 'Dada'],
    playing:false,
    item:null,
    tokennew:null,
    discover_weekly:null
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type , [payload]
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                tokennew: action.ttoken
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlist

            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
            
        default:
            return state;
    }
}

export default reducer;