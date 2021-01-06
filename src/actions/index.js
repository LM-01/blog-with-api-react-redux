import _ from 'lodash';
import jsonplaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => async dispatch => {
    const response = await jsonplaceholder.get(`/posts`);

    // console.log(response.data)

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
    return 1;
}


export const fetchUserID = (userId) => async dispatch => {
    const response = await jsonplaceholder.get(`/users/${userId}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
}