import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import rootAction from '../../actions/action';
import CONSTANTS from '../../scripts/apps/constants';
import GLOBAL_VARIABLES from '../../scripts/apps/global-variables';
import GLOBAL_FUNCTIONS from '../../scripts/apps/global-functions';
import HomeHeader from './home-header';
import HomeTopSeller from './home-top-seller';
import HomeTopRate from './home-top-rate';
import HomeCurrentPost from './home-current-post';
import HomeFooter from './home-footer';

const mapStateToProps = state => {
    return {
    };
}
const mapDispatchToProps = dispatch => {
    return {
    };
};

class HomeConnected extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.Init();
    }
    componentWillUnmount() {
    }

    //events


    //functions
    Init() {
        GLOBAL_FUNCTIONS.SetTitle("Home");
    }

    render() {
        return (
            <div id="home-page">
                <HomeHeader />
                <HomeTopSeller />
                <HomeTopRate />
                <HomeCurrentPost />
                <HomeFooter />
            </div>
        );
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeConnected);
export default withRouter(Home);