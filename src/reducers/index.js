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

const getUser = (state = [], action) => {
    // console.log(action.payload)
    switch(action.type) {
        case 'FETCH_USER':
            return [...state,action.payload]
        default:
            return state;
    }
}

export default combineReducers({
    posts: getPosts,
    users: getUser,
});