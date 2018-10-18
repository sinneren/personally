import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Boards from '../../components/Boards';
import * as boardsActions from '../../actions/BoardsActions';

class TasksContainer extends Component {
    componentWillMount() {
        if (this.props.state.users.user === null) {
            browserHistory.push('/');
        } else {
            this.props.actions.getBoards(this.props.state.users.user.id)
        }
    }
    render() {
        return (
            <Boards boards={this.props.state.boards.data} />
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
        actions: bindActionCreators(boardsActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)