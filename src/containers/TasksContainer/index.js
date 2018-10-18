import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
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
        if (this.props.state.users.user !== null) {
            this.props.actions.getBoards(this.props.state.users.user.id)
        }
    }
    render() {
        return (
            <React.Fragment>
                <button className="btn btn-default float-left" title="Add new board" onClick={this.handleClick}>+</button>
                <Boards boards={this.props.state.boards.data} />
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
export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)