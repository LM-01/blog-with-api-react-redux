import React from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';
import UserHeader from './UserHeader'

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    renderPosts() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <div className="description"><UserHeader userId={post.userId} /></div>
                </div>
            </div>
            );
        })
    }

    render() {
        // console.log(this.props.posts)
        return <div className="ui relaxed divided list">{this.renderPosts()}</div>
    }
}

const mapStateToProps =(state)=>{
    // console.log(state)
    return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts })(PostList);