const initialState = {
    favorites:  [],
    loading: false,
    error: null,
};

const favorites = (state = initialState, action) => {
    switch (action.type) {
        case "photos/adding/favorite":
            return {
                ...state,
                favorites: [...state.favorites, action.payload,]
            }
        case "photos/deleting/favorite":
            return {
                ...state,
                favorites: state.favorites.filter((item) => item.image.id !== action.payload.image.id)
            }

        default:
            return {
                ...state,
            };
    }
};


export default favorites;
