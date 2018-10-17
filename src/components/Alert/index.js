import React, { PureComponent } from 'react';
export default class Alert extends PureComponent {
    render() {
        return (
            <div className={"alert alert-" + this.props.type} role="alert">
                {this.props.text}
                {this.props.close && (
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                )}
            </div>
        )
    }

}