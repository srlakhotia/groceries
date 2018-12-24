const tasks = (state = {}, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'GET_CATEGORIES': {
            newState.categories = action.payload;
            return newState;
        }
        default:
            return newState;
    }
};

export default tasks;