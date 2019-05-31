import React from 'react';
import { connect } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';

const mapStateToProps = state => {
    return {
    };
}
const mapDispatchToProps = dispatch => {
    return {
    };
};

class ShopInfoBannerConnected extends React.Component {

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
            <section className="page-section no-padding-top">
                <div className="container">
                    <div className="row blocks shop-info-banners">
                        <div className="col-md-4">
                            <div className="block">
                                <div className="media">
                                    <div className="pull-right"><i className="fa fa-gift"></i></div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Buy 1 Get 1</h4>
                                        Proin dictum elementum velit. Fusce euismod consequat ante.
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="block">
                                <div className="media">
                                    <div className="pull-right"><i className="fa fa-comments"></i></div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Call to Free</h4>
                                        Proin dictum elementum velit. Fusce euismod consequat ante.
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="block">
                                <div className="media">
                                    <div className="pull-right"><i className="fa fa-trophy"></i></div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Money Back!</h4>
                                        Proin dictum elementum velit. Fusce euismod consequat ante.
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const ShopInfoBanner = connect(mapStateToProps, mapDispatchToProps)(ShopInfoBannerConnected);
export default ShopInfoBanner;