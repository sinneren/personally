import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from '../../components/Profile';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.initialProps = {
            avatar: '',
            username: '',
            email: '',
        }
        if (this.props.state.users.user === null) {
            browserHistory.push('/');
        } else {
            this.initialProps = this.props.state.users.user;
        }

    }
    componentDidMount () {
        document.title = 'Profile';
    }
    render() {
        return (
            <Profile data={this.initialProps} />
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

ProfileContainer.propTypes = {
    state: PropTypes.object.isRequired,
}
export default connect(mapStateToProps)(ProfileContainer)