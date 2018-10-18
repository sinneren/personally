import React, { Component } from 'react';
import Board from '../Board';
export default class Boards extends Component {
    render() {
        let list = null;

        list = this.props.boards.map(item => {
            return (
                <div className="col-lg-2" key={item.id}>
                    <Board id={item.id} userid={item.userId} title={item.name} date={item.createdAt} tasks={item.tasks} action={this.props.action}/>
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