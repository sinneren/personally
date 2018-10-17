import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as usersActions from '../actions/';
import UserListView from '../components/UserListView';

class UserList extends Component {
    componentDidMount() {
        this.props.actions.getUserList();
    }
    render() {
        return (
            <div>
                <UserListView data={this.props.state.users.data} />
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(UserList)