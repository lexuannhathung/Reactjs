import React from 'react';
import CONSTANTS from './scripts/apps/constants';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/headers/header';
import Footer from './components/footers/footer';
import Home from './components/homes/home';
import ProductDetail from './components/product-details/product-detail';

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
            <div className="wrapper">
                <Header />
                <div className="content-area">
                    <Route path={CONSTANTS.NAVIGATION_URL.HOME} component={Home} />
                    <Route path={CONSTANTS.NAVIGATION_URL.PRODUCT_DETAIL} component={ProductDetail} />
                </div>
                <Footer />
            </div>
        );
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppConnected);
export default withRouter(App);