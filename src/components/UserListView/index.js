import React, { Component } from 'react';

export default class UserListView extends Component {
    renderView(data) {
        return data.map((item) => {
            return (<div key={item.id}>
                <div>{item.username}</div>
                <div>
                    <img src={item.avatar} alt="{item.username}" />
                </div>
            </div>)
        })
    }
    render() {
        return (
            <div>
                {this.renderView(this.props.data)}
            </div>
        )
    }
}