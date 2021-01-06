import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchUserID } from '../actions'

class UserHeader extends React.Component {

    componentDidMount() {
        this.props.fetchUserID(this.props.userId);
    };
    
    render(){
        const { user } = this.props;
        // console.log(this.props.userID)
        return <p style={{fontWeight: '700', paddingTop: '5px'}}>{user.name}</p>
    }
}

const mapStateToProps = (state, ownProps) => {

    const stateUser = state.users.find(user => {
        return ownProps.userId === user.id;
    })

    return {
        user: stateUser
    }
}

export default connect( mapStateToProps, { fetchUserID } )(UserHeader);