import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../../components/Profile';
import { browserHistory } from 'react-router';

class ProfileContainer extends Component {
    componentWillMount() {
        if (this.props.state.users.user === null) {
            browserHistory.push('/');
        }
    }
    render() {
        return (
            <Profile data={this.props.state.users.user} />
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(ProfileContainer)