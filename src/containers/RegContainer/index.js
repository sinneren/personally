import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/UserActions';
import FormReg from '../../components/FormReg';

class RegContainer extends Component {
    componentDidMount() {
        document.title = 'Registration';
    }
    render() {
        return(
            <FormReg state={this.props.state} actions={this.props.actions} />
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
RegContainer.propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(RegContainer)