import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as usersActions from '../../actions';

class FormReg extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleReg = this.handleReg.bind(this);
        this.state = {
            username: '',
            password: '',
            createdAt: '',
            avatar: '',
            email: 'fake@ex.com',
            amount: 0
        }
    }
    handleChange(event) {
        let target = event.currentTarget;
        this.setState({
            [target.name]: target.value
        });
    }
    handleReg(event) {
        event.preventDefault();
        this.props.actions.pushNewUser(this.state);
        this.setState({
            username: '',
            password: '',
        });
    }
    render() {
        return (
            <form className="pt-5">
                <div className="form-group">
                    <label>Your username
                        <input className="form-control form-control-lg" type='text' name="username" value={this.state.username} onChange={this.handleChange} disabled={this.props.state.users.request && 'disabled'} />
                    </label>
                </div>
                <div className="form-group">
                    <label>Your password
                        <input className="form-control form-control-lg" type='password' name="password" value={this.state.password} onChange={this.handleChange} disabled={this.props.state.users.request && 'disabled'} />
                    </label>
                </div>
                <button onClick={this.handleReg} className="btn btn-lg btn-success" disabled={this.props.state.users.request && 'disabled'} >Registration</button>
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