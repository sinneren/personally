import React, { Component } from 'react';
import Board from '../Board';
export default class Boards extends Component {
    renderBoardList = (boards) => {
        return boards.map(item => {
            return (
                <div className="col-lg-2" key={item.id}>
                    <Board id={item.id} userid={item.userId} title={item.name} date={item.createdAt} tasks={item.tasks} type={item.type} actions={this.props.actions} />
                </div>
            );
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="row">{(this.props.boards.length > 0) && this.renderBoardList(this.props.boards)}</div>
            </React.Fragment>
        )
    }
}