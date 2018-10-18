import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/UserActions';
import Alert from '../Alert';

class FormReg extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleReg = this.handleReg.bind(this);
        this.state = {
            userinfo: {
                username: '',
                password: '',
                email: '',
                amount: 0,
            },
            valid: false,
            formErrors: { username: '', password: '', email: '', },
            usernameValid: false,
            passwordValid: false,
            emailValid: false,
        }
    }
    handleChange(event) {
        const target = event.currentTarget;
        this.setState(prevState => ({
            userinfo: {
                ...prevState.userinfo,
                [target.name]: target.value,
            },
        }), () => this.validateFields(target.name, target.value));
    }
    handleReg(event) {
        event.preventDefault();
        this.props.actions.pushNewUser(this.state.userinfo);
        this.setState({
            userinfo: {
                username: '',
                password: '',
                email: '',
            }
        });
    }
    validateFields(name, value) {
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;
        let emailValid    = this.state.emailValid;

        switch (name) {
            case 'password':
                passwordValid = value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);
                fieldValidationErrors.password = passwordValid ? '' : 'Password must be more than 8 characthers and contain digits, uppercase and lowercase characters.';
                break;
            case 'email':
                emailValid = value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
                fieldValidationErrors.email = emailValid ? '' : 'Email is not correct';
                break;
            case 'username':
                usernameValid = value.length > 2;
                fieldValidationErrors.username = usernameValid ? '' : 'Username must be more than 3 characthers.';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            usernameValid: usernameValid,
            passwordValid: passwordValid,
            emailValid: emailValid,
        }, this.validateForm);
    }
    validateForm () {
        this.setState({ valid: this.state.usernameValid && this.state.passwordValid && this.state.emailValid});
    }
    render() {
        return (
            <form className="pt-5 ">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="d-block">Your username
                            <input className="form-control form-control-lg" type='text' name="username" value={this.state.userinfo.username} onChange={this.handleChange} disabled={this.props.state.users.request && 'disabled'} />
                            {(this.state.formErrors.username.length > 0) && (
                                <small className="form-text text-danger">{this.state.formErrors.username}</small>
                            )}
                        </label>
                    </div>
                    <div className="form-group col-md-6">
                        <label className="d-block">Your email
                            <input className="form-control form-control-lg" type='text' name="email" value={this.state.userinfo.email} onChange={this.handleChange} disabled={this.props.state.users.request && 'disabled'} />
                            {(this.state.formErrors.email.length > 0) && (
                                <small className="form-text text-danger">{this.state.formErrors.email}</small>
                            )}
                        </label>
                    </div>
                    <div className="form-group col-md-6">
                        <label className="d-block">Your password
                            <input className="form-control form-control-lg" type='password' name="password" value={this.state.userinfo.password} onChange={this.handleChange} disabled={this.props.state.users.request && 'disabled'} />
                            {(this.state.formErrors.password.length > 0) && (
                                <small className="form-text text-danger">{this.state.formErrors.password}</small>
                            )}
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <button onClick={this.handleReg} className="btn btn-lg btn-success" disabled={(this.props.state.users.request || !this.state.valid) && 'disabled'} >Registration</button>
                </div>
                {this.props.state.users.reg && (
                    <div className="form-row">
                        <Alert
                            type='success mt-5'
                            text='Successfull registration' />
                    </div>
                )}
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
export default connect(mapStateToProps, mapDispatchToProps)(FormReg)