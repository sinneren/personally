import React, { Component } from 'react';
export default class Profile extends Component {

    render() {
        return (
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Avatar</label>
                    <div className="col-sm-10">
                        <img src={this.props.data.avatar} className="img-rounded" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" value={this.props.data.username} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" readOnly className="form-control-plaintext" value={this.props.data.email} />
                    </div>
                </div>
            </form>
        )
    }
}