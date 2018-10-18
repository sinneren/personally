import React, { Component } from 'react';
import Task from '../Task';
export default class Board extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        event.preventDefault();
        this.props.action(this.props.userid, this.props.id);
    }
    render() {
        const datetime = new Date(this.props.date);
        const datetimeformatted = datetime.getDate() + '/' + datetime.getMonth() + '/' + datetime.getFullYear();
        let list = null;
        list = this.props.tasks.map(item => {
            return (
                <Task key={item.id} title={item.name} text={item.text} type={item.type} />
            );
        });
        return (
            <div className="list-group mb-5">
                <div className="list-group-item list-group-item-action flex-column align-items-start active">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{this.props.title}</h5>
                        <small>{datetimeformatted}</small>
                    </div>
                </div>
                {list ? list : ''}
                <div className="list-group-item list-group-item-action flex-column align-items-center">
                    <button className="btn btn-outline-secondary btn-block" onClick={this.handleClick}>+</button>
                </div>
            </div>
        )
    }
}