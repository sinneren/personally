import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            text: this.props.text,
            type: this.props.type,
        }
    }
    updateTask = data => {
        this.props.actions.updateTask(this.props.userid, this.props.board_id, this.props.id, data);
    }
    handleTitleChange = () => {
        this.updateTask({ name: this.state.title })
    }
    handleTitleInput = event => {
        this.setState({
            title: event.target.value,
        })
    }
    handleTextChange = () => {
        this.updateTask({ text: this.state.text })
    }
    handleTextInput = event => {
        this.setState({
            text: event.target.value,
        })
    }

    render() {
        return (
            <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between  text-left">
                    <ContentEditable className="mb-1" html={this.state.title} onBlur={this.handleTitleChange} onChange={this.handleTitleInput} tagName='h5' />
                    <small className="text-muted">{this.state.type}</small>
                    <button className="btn btn-sm btn-outline-danger">X</button>
                </div>
                    <ContentEditable className="mt-1 mb-1 text-left" html={(this.state.text.length > 0) ? this.state.text : 'Click to change text...'} onBlur={this.handleTextInput} onChange={this.handleTextChange} tagName='div' />
            </div>
        )
    }
}