import React, { Component } from 'react';
export default class Task extends Component {
    render() {
        return (
            <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{this.props.title}</h5>
                    <small className="text-muted">{this.props.type}</small>
                </div>
                <p className="mb-1">{this.props.text}</p>
            </div>
        )
    }
}