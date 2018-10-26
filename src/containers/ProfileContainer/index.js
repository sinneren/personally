import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from '../../components/Profile';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

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
ProfileContainer.defaultProps = {
    state: {
        users: {
            user: {
                avatar: '',
                username: '',
                email: '',
            }
        }
    }
}
ProfileContainer.propTypes = {
    state: {
        users: {
            user: PropTypes.object.isRequired
        }
    }
}
export default connect(mapStateToProps)(ProfileContainer)