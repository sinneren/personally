import React, { Component } from 'react';
import Task from '../Task';
import ContentEditable from 'react-contenteditable';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
        }
    }
    handleTitleChange = () => {
        this.props.actions.updateBoard(this.props.userid, this.props.id, { name: this.state.title});
    }
    handleTitleInput = event => {
        this.setState({
            title: event.target.value,
        })
    }
    handleClick = event => {
        event.preventDefault();
        this.props.actions.addTasks(this.props.userid, this.props.id);
    }
    handleDelete = event => {
        event.preventDefault();
        this.props.actions.deleteBoard(this.props.userid, this.props.id);
    }
    renderTasks = (tasks) => {
        return tasks.map(item => {
            return (
                <Task key={item.id}
                    id={item.id}
                    userid={this.props.userid}
                    board_id={this.props.id}
                    title={item.name}
                    text={(item.text) ? item.text : ''}
                    type={item.type}
                    actions={this.props.actions}
                />
            );
        });
    }
    calculateDateTimeFormatted(date) {
        const datetime = new Date(date);
        return datetime.getDate() + '/' + datetime.getMonth() + '/' + datetime.getFullYear();
    }
    render() {
        return (
            <div className="list-group mb-5">
                <div className="list-group-item list-group-item-action flex-column align-items-start active text-left">
                    <ContentEditable className="mb-1" html={this.state.title} onBlur={this.handleTitleChange} onChange={this.handleTitleInput} tagName='h5' />
                    <small>{this.calculateDateTimeFormatted(this.props.date)}</small>
                    <button className="btn btn-sm btn-outline-danger btn-delete float-right" onClick={this.handleDelete}>X</button>
                </div>
                {(this.props.tasks.length > 0) && this.renderTasks(this.props.tasks)}
                <div className="list-group-item list-group-item-action flex-column align-items-center">
                    <button className="btn btn-outline-secondary btn-block" onClick={this.handleClick}>+</button>
                </div>
            </div>
        )
    }
}