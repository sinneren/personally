import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class TopMenu extends PureComponent {
    render() {
        return (
            <nav className="nav justify-content-end">
                <li className="nav-item">
                    <Link to='/' className="nav-link">Main</Link>
                </li>
                <li className="nav-item">
                    <Link to='/signup' className="nav-link">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link to='/signin' className="nav-link">Sign In</Link>
                </li>
            </nav>
        )
    }
}