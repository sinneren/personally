import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import Boards from '../../components/Boards';
import * as boardsActions from '../../actions/BoardsActions';

class TasksContainer extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        if (this.props.state.users.user === null) {
            browserHistory.push('/');
        }
    }
    handleClick() {
        this.props.actions.addBoard(this.props.state.users.user.id);
    }

    componentDidMount() {
        document.title = 'Tasks';
        if (this.props.state.users.user !== null) {
            this.props.actions.getBoards(this.props.state.users.user.id)
        }
    }
    render() {
        return (
            <React.Fragment>
                <button className="btn btn-default float-left" title="Add new board" onClick={this.handleClick}>+</button>
                <Boards boards={this.props.state.boards.data} actions={this.props.actions}/>
            </React.Fragment>
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
TasksContainer.propTypes = {
    actions: {
        addBoard: PropTypes.func.isRequired,
        getBoards: PropTypes.func.isRequired,
    },
    state: {
        users: {
            user: PropTypes.object,
        },
        boards: {
            data: PropTypes.object,
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)