import React from 'react';
import CONSTANTS from './scripts/apps/constants';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
    };
}
const mapDispatchToProps = dispatch => {
    return {
    };
}

class AppConnected extends React.Component {
    constructor() {
        super();
    }

    //life cycle
    componentDidMount() {
    }
    componentWillUnmount() {
    }

    //functions

    render() {
        return (
            <div>Hello people</div>
        );
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppConnected);
export default withRouter(App);