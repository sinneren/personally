import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../../components/Profile';
import { browserHistory } from 'react-router';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.defaultProps = {
            avatar: '',
            username: '',
            email: '',
        }
        if (this.props.state.users.user === null) {
            browserHistory.push('/');
        } else {
            this.defaultProps = this.props.state.users.user;
        }

    }
    render() {
        return (
            <Profile data={this.defaultProps} />
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(ProfileContainer)