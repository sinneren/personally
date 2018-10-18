import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as usersActions from '../../actions/UserActions';
import Alert from '../Alert';

class FormAuth extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: '',
            password: '',
        }
    }
    handleChange(event) {
        let target = event.currentTarget;
        this.setState({
            [target.name]: target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.actions.signIn(this.state);
    }
    componentDidUpdate() {
        if (this.props.state.users.auth) {
            browserHistory.push('/profile');
        }
    }
    render() {
        return (
            <form className="pt-5">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="d-block">Your username
                        <input className="form-control form-control-lg" type='text' name="username" value={this.state.username} onChange={this.handleChange} disabled={this.props.state.users.request && 'disabled'} />
                        </label>
                    </div>
                    <div className="form-group col-md-6">
                        <label className="d-block">Your password
                        <input className="form-control form-control-lg" type='password' name="password" value={this.state.password} onChange={this.handleChange} disabled={this.props.state.users.request && 'disabled'} />
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <button onClick={this.handleSubmit} className="btn btn-lg btn-primary" disabled={this.props.state.users.request && 'disabled'} >Sign In</button>
                </div>
                {(this.props.state.users.error_message.length > 0) && (
                    <div className="form-row">
                        <Alert
                            type='danger mt-5'
                            text={this.props.state.users.error_message} />
                    </div>
                )}
            </form>
        )
    }
}
function mapStateToProps(state) {
    return {
        state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(usersActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormAuth)