import {
    combineReducers
} from 'redux';


const getPosts = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            const allPosts = action.payload;
            return allPosts
        default:
            return state;

    }

}

export default combineReducers({
    posts: getPosts
});