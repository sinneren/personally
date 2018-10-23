import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            text: this.props.text,
            type: this.props.type,
            deleted: false,
        }
    }
    updateTask = data => {
        this.props.actions.updateTask(this.props.userid, this.props.board_id, this.props.id, data);
    }
    handleTitleChange = () => {
        this.updateTask({ name: this.state.title })
    }
    handleTextChange = () => {
        this.updateTask({ text: this.state.text })
    }
    handleTitleInput = event => {
        this.setState({
            title: event.target.value,
        })
    }
    handleTextInput = event => {
        this.setState({
            text: event.target.value,
        })
    }
    handleClick = event => {
        event.preventDefault();
        this.props.actions.deleteTask(this.props.userid, this.props.board_id, this.props.id);
        this.setState({
            deleted: true,
        })
    }
    render() {
        return (
            <div className={"list-group-item list-group-item-action flex-column align-items-start" + (this.state.deleted ? " d-none": "")}>
                <div className="d-flex w-100 justify-content-between  text-left">
                    <ContentEditable className="mb-1" html={this.state.title} onBlur={this.handleTitleChange} onChange={this.handleTitleInput} tagName='h5' />
                    <small className="text-muted">{this.state.type}</small>
                    <button className="btn btn-sm btn-outline-danger btn-delete" onClick={this.handleClick}>X</button>
                </div>
                    <ContentEditable className="mt-1 mb-1 text-left" html={(this.state.text) ? this.state.text : 'Click to change text...'} onBlur={this.handleTextChange} onChange={this.handleTextInput} tagName='div' />
            </div>
        )
    }
}