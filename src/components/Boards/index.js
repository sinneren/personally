import React, { Component } from 'react';
import Board from '../Board';
export default class Boards extends Component {
    render() {
        let list = null;
        list = this.props.boards.map(item => {
            return (
                <div className="col-lg-3">
                    <Board key={item.id} title={item.name} date={item.createdAt} tasks={item.tasks} />
                </div>
            );
        });
        return (
            <div>
                {list && <div className="row">{list}</div>}
            </div>
        )
    }
}