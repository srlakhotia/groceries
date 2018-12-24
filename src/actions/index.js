import axios from 'axios';

const GET_CATEGORIES = () => {
    return dispatch => {
        axios.get('/category/primary')
            .then(res => {
                console.log(res);
                dispatch({
                    type: 'GET_CATEGORIES',
                    payload: res.data
                });
            })
    }
};

export {
    GET_CATEGORIES
}