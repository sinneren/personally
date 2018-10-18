import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import './style.css';

export default class User extends PureComponent {
    render() {
        return (
            <div className="user float-right">
                <img src={this.props.data.avatar} alt={this.props.data.username} className="user-pic img-rounded" width="35" height="35" />
                <Link to='/profile'>
                    <span className="user-name">{this.props.data.username}</span>
                </Link>
                <Link to='/signout' className="user-link" onClick={this.props.onSignout}>Sign Out</Link>
            </div>
        )
    }
}