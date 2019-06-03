import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import rootAction from '../../actions/action';
import CONSTANTS from '../../scripts/apps/constants';
import GLOBAL_VARIABLES from '../../scripts/apps/global-variables';

const mapStateToProps = state => {
    return {
    };
}
const mapDispatchToProps = dispatch => {
    return {
    };
};

class ProductDetailConnected extends React.Component {

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
        let { history } = this.props;
    }

    render() {
        let { match } = this.props;
        return (
            <div id="product-detail-page">
                detail {match.params.id}
            </div>
        );
    }
}

const ProductDetail = connect(mapStateToProps, mapDispatchToProps)(ProductDetailConnected);
export default withRouter(ProductDetail);