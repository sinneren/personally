import React, { Component } from 'react';
export default class Profile extends Component {

    render() {
        return (
            <form>
                <div className="form-group row">
                    <div className="col-sm-2  offset-2 text-left">
                        <img src={this.props.data.avatar} className="img-rounded" alt={this.props.data.username} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-right">Username</label>
                    <div className="col-sm-10 text-left">
                        <input type="text" readOnly className="form-control-plaintext" value={this.props.data.username} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-right">Email</label>
                    <div className="col-sm-10 text-left">
                        <input type="email" readOnly className="form-control-plaintext" value={this.props.data.email} />
                    </div>
                </div>
            </form>
        )
    }
}