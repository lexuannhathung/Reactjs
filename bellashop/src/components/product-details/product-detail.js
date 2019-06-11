import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import rootAction from '../../actions/action';
import CONSTANTS from '../../scripts/apps/constants';
import GLOBAL_VARIABLES from '../../scripts/apps/global-variables';
import ProductDetailAvatar from './product-detail-avatar';
import ProductDetailInfo from './product-detail-info';
import ShopInfoBanner from '../shared/shop-info-banner';
import ProductDetailReview from './product-detail-review';
import ProductDetailRelatedProduct from './product-detail-related-product';
import BrandClient from '../shared/brand-client';

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
                <section class="page-section">
                    <div class="container">
                        <div className="row product-single">
                            <div className="col-md-6">
                                <ProductDetailAvatar />
                            </div>
                            <div className="col-md-6">
                                <ProductDetailInfo />
                            </div>
                        </div>
                    </div>
                </section>
                <ShopInfoBanner />
                <ProductDetailReview />
                <ProductDetailRelatedProduct />
                <BrandClient />
            </div>
        );
    }
}

const ProductDetail = connect(mapStateToProps, mapDispatchToProps)(ProductDetailConnected);
export default withRouter(ProductDetail);