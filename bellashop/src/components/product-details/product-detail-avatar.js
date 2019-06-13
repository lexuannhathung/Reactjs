import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import rootAction from '../../actions/action';
import CONSTANTS from '../../scripts/apps/constants';
import GLOBAL_VARIABLES from '../../scripts/apps/global-variables';
import OwlCarousel from 'react-owl-carousel';
import ViewImage from '../shared/view-image';

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
        this.state = new function () {
            this.position = 0;
            this.view_image_open = false;
            this.view_image_url = "/styles/img/preview/shop/product-1-big.jpg";
        }
    }

    componentDidMount() {
        this.Init();
    }
    componentWillUnmount() {
    }

    //events
    handleCloseViewImage = () => {
        this.setState({ view_image_open: false });
    }
    handleOpenViewImage = (url, position) => {
        this.setState({ view_image_open: true, view_image_url: url, position: position });
    }

    //functions
    Init() {
    }

    render() {
        return (
            <div>
                <ViewImage open={this.state.view_image_open} url={this.state.view_image_url} handleClose={this.handleCloseViewImage} />
                <div className="badges">
                    <div className="hot">hot</div>
                    <div className="new">new</div>
                </div>
                <OwlCarousel
                    className="owl-theme"
                    loop
                    items={1}
                    nav
                    startPosition={this.state.position}
                >
                    <div className="item">
                        <a><img onClick={this.handleOpenViewImage.bind(this, "/styles/img/preview/shop/product-1-big.jpg", 0)} className="img-responsive" src="/styles/img/preview/shop/product-1-big.jpg" alt="" /></a>
                    </div>
                    <div className="item">
                        <a><img onClick={this.handleOpenViewImage.bind(this, "/styles/img/preview/shop/product-10c.jpg", 1)} className="img-responsive" src="/styles/img/preview/shop/product-10c.jpg" alt="" /></a>
                    </div>
                    <div className="item">
                        <a><img onClick={this.handleOpenViewImage.bind(this, "/styles/img/preview/shop/product-11c.jpg", 2)} className="img-responsive" src="/styles/img/preview/shop/product-11c.jpg" alt="" /></a>
                    </div>
                    <div className="item">
                        <a><img onClick={this.handleOpenViewImage.bind(this, "/styles/img/preview/shop/product-12c.jpg", 3)} className="img-responsive" src="/styles/img/preview/shop/product-12c.jpg" alt="" /></a>
                    </div>
                </OwlCarousel>
                <div className="row product-thumbnails">
                    <div className="col-xs-2 col-sm-2 col-md-3"><a onClick={() => { this.setState({ position: 0 }) }}><img src="/styles/img/preview/shop/product-thumb-1.jpg" alt="" /></a></div>
                    <div className="col-xs-2 col-sm-2 col-md-3"><a onClick={() => { this.setState({ position: 1 }) }}><img src="/styles/img/preview/shop/product-10c.jpg" alt="" /></a></div>
                    <div className="col-xs-2 col-sm-2 col-md-3"><a onClick={() => { this.setState({ position: 2 }) }}><img src="/styles/img/preview/shop/product-11c.jpg" alt="" /></a></div>
                    <div className="col-xs-2 col-sm-2 col-md-3"><a onClick={() => { this.setState({ position: 3 }) }}><img src="/styles/img/preview/shop/product-12c.jpg" alt="" /></a></div>
                </div>
            </div>
        );
    }
}

const ProductDetailAvatar = connect(mapStateToProps, mapDispatchToProps)(ProductDetailAvatarConnected);
export default withRouter(ProductDetailAvatar);