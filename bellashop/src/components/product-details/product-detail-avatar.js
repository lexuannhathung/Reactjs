import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import rootAction from '../../actions/action';
import CONSTANTS from '../../scripts/apps/constants';
import GLOBAL_VARIABLES from '../../scripts/apps/global-variables';
import OwlCarousel from 'react-owl-carousel';

const mapStateToProps = state => {
    return {
    };
}
const mapDispatchToProps = dispatch => {
    return {
    };
};

class ProductDetailAvatarConnected extends React.Component {

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
    }

    render() {
        return (
            <div>
                <div className="badges">
                    <div className="hot">hot</div>
                    <div className="new">new</div>
                </div>
                <OwlCarousel
                    className="owl-theme"
                    loop
                    items={1}
                    nav
                >
                    <div className="item">
                        <a href="/styles/img/preview/shop/product-1-big.jpg" data-gal="prettyPhoto"><img className="img-responsive" src="/styles/img/preview/shop/product-1-big.jpg" alt="" /></a>
                    </div>
                    <div className="item">
                        <a href="/styles/img/preview/shop/product-2-big.jpg" data-gal="prettyPhoto"><img className="img-responsive" src="/styles/img/preview/shop/product-10c.jpg" alt="" /></a>
                    </div>
                    <div className="item">
                        <a href="/styles/img/preview/shop/product-2-big.jpg" data-gal="prettyPhoto"><img className="img-responsive" src="/styles/img/preview/shop/product-11c.jpg" alt="" /></a>
                    </div>
                    <div className="item">
                        <a href="/styles/img/preview/shop/product-2-big.jpg" data-gal="prettyPhoto"><img className="img-responsive" src="/styles/img/preview/shop/product-12c.jpg" alt="" /></a>
                    </div>
                </OwlCarousel>
                <div className="row product-thumbnails">
                    <div className="col-xs-2 col-sm-2 col-md-3"><a href="#" onclick="jQuery('.img-carousel').trigger('to.owl.carousel', [0, 300]);"><img src="/styles/img/preview/shop/product-thumb-1.jpg" alt="" /></a></div>
                    <div className="col-xs-2 col-sm-2 col-md-3"><a href="#" onclick="jQuery('.img-carousel').trigger('to.owl.carousel', [1, 300]);"><img src="/styles/img/preview/shop/product-thumb-2.jpg" alt="" /></a></div>
                    <div className="col-xs-2 col-sm-2 col-md-3"><a href="#" onclick="jQuery('.img-carousel').trigger('to.owl.carousel', [2, 300]);"><img src="/styles/img/preview/shop/product-thumb-3.jpg" alt="" /></a></div>
                    <div className="col-xs-2 col-sm-2 col-md-3"><a href="#" onclick="jQuery('.img-carousel').trigger('to.owl.carousel', [3, 300]);"><img src="/styles/img/preview/shop/product-thumb-4.jpg" alt="" /></a></div>
                </div>
            </div>
        );
    }
}

const ProductDetailAvatar = connect(mapStateToProps, mapDispatchToProps)(ProductDetailAvatarConnected);
export default withRouter(ProductDetailAvatar);