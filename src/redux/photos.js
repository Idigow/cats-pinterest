const initialState = {
    photos: [],
    loading: false,
    error: null,
};

const photos = (state = initialState, action) => {
    switch (action.type) {
        case "photos/loading/start":
            return {
                ...state,
                loading: true
            };
        case "photos/loading/error":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "photos/loading/success":
            return {
                ...state,
                photos: action.payload,
                loading: false
            };
        default:
            return {
                ...state,
            };
    }
};


export const loadPhotos = () => {
    return async (dispatch) => {
        dispatch({ type: "photos/loading/start" });
        const response = await fetch("https://api.thecatapi.com/v1/breeds");
        const json = await response.json();
        if (json.error) {
            dispatch({ type: "photos/loading/error", payload: json.error });
        } else {
            dispatch({ type: "photos/loading/success", payload: json });
        }
    };
};


export default photos;