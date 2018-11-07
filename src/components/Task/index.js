import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            text: this.props.text,
            deleted: false,
        }
    }
    handleInputBlur = event => {
        const type = event.currentTarget.dataset.type,
              text = event.currentTarget.innerText;

        if (this.props[type] !== text) {
            this.setState({
                [type]: text
            })
            this.props.actions.updateTask(this.props.userid, this.props.board_id, this.props.id, {
                [type]: text
            })
        }
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
                    <ContentEditable
                        tagName='h5'
                        className="mb-1"
                        html={this.state.name}
                        onBlur={this.handleInputBlur}
                        data-type="name"
                    />
                    <small className="text-muted">{this.props.type}</small>
                    <button className="btn btn-sm btn-outline-danger btn-delete" onClick={this.handleClick}>X</button>
                </div>
                <ContentEditable
                    tagName='div'
                    className="mt-1 mb-1 text-left"
                    html={(this.state.text) ? this.state.text : 'Click to change text...'}
                    onBlur={this.handleInputBlur}
                    data-type="text"
                />
            </div>
        )
    }
}