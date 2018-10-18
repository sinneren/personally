import React, { Component } from 'react';
export default class Task extends Component {
    render() {
        return (
            <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{this.props.title}</h5>
                    <small class="text-muted">{this.props.type}</small>
                </div>
                <p class="mb-1">{this.props.text}</p>
            </div>
        )
    }
}