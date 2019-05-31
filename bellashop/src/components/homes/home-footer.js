import React from 'react';
import { connect } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';
import SmallStandardItem from '../shared/small-standard-item';

const mapStateToProps = state => {
    return {
    };
}
const mapDispatchToProps = dispatch => {
    return {
    };
};

class HomeFooterConnected extends React.Component {

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
            <React.Fragment>
                <section className="page-section">
                    <div className="container">
                        <h2 className="section-title"><span>Brand &amp; Clients</span></h2>
                        <div className="partners-carousel">
                            <OwlCarousel
                                className=""
                                loop
                                margin={30}
                                autoWidth={true}
                            >
                                <div><a href="#"><img src="styles/img/preview/partners/brand-logo-1.jpg" alt="" /></a></div>
                                <div><a href="#"><img src="styles/img/preview/partners/brand-logo-2.jpg" alt="" /></a></div>
                                <div><a href="#"><img src="styles/img/preview/partners/brand-logo-3.jpg" alt="" /></a></div>
                                <div><a href="#"><img src="styles/img/preview/partners/brand-logo-4.jpg" alt="" /></a></div>
                                <div><a href="#"><img src="styles/img/preview/partners/brand-logo-5.jpg" alt="" /></a></div>
                                <div><a href="#"><img src="styles/img/preview/partners/brand-logo-1.jpg" alt="" /></a></div>
                                <div><a href="#"><img src="styles/img/preview/partners/brand-logo-2.jpg" alt="" /></a></div>
                                <div><a href="#"><img src="styles/img/preview/partners/brand-logo-3.jpg" alt="" /></a></div>
                                <div><a href="#"><img src="styles/img/preview/partners/brand-logo-4.jpg" alt="" /></a></div>
                                <div><a href="#"><img src="styles/img/preview/partners/brand-logo-5.jpg" alt="" /></a></div>
                                <div><a href="#"><img src="styles/img/preview/partners/brand-logo-1.jpg" alt="" /></a></div>
                                <div><a href="#"><img src="styles/img/preview/partners/brand-logo-2.jpg" alt="" /></a></div>
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
                <section className="page-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="product-list">
                                    <a className="btn btn-theme btn-title-more" href="#">See All</a>
                                    <h4 className="block-title"><span>Top Sellers</span></h4>
                                    <SmallStandardItem />
                                    <SmallStandardItem />
                                    <SmallStandardItem />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product-list">
                                    <a className="btn btn-theme btn-title-more" href="#">See All</a>
                                    <h4 className="block-title"><span>Top Accessories</span></h4>
                                    <SmallStandardItem />
                                    <SmallStandardItem />
                                    <SmallStandardItem />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product-list">
                                    <a className="btn btn-theme btn-title-more" href="#">See All</a>
                                    <h4 className="block-title"><span>Top Newest</span></h4>
                                    <SmallStandardItem />
                                    <SmallStandardItem />
                                    <SmallStandardItem />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
            </React.Fragment>
        );
    }
}

const HomeFooter = connect(mapStateToProps, mapDispatchToProps)(HomeFooterConnected);
export default HomeFooter;