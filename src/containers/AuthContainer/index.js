import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as usersActions from '../../actions/UserActions';
import FormAuth from '../../components/FormAuth';

class AuthContainer extends Component {
    componentDidMount() {
        document.title = 'Authorization';
    }
    componentDidUpdate() {
        if (this.props.state.users.auth) {
            browserHistory.push('/profile');
        }
    }
    render() {
        return(
            <FormAuth state={this.props.state} actions={this.props.actions} />
        )
    }
}
function mapStateToProps(state) {
    return {
        state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(usersActions, dispatch)
    }
}
AuthContainer.propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)