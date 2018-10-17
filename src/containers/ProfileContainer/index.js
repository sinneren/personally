import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Profile from '../../components/Profile';

class ProfileContainer extends Component {
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