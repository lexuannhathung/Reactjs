import React from 'react';
import { connect } from 'react-redux';
import SmallStandardItem from '../shared/small-standard-item';
import BrandClient from '../shared/brand-client';
import ShopInfoBanner from '../shared/shop-info-banner';

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
                <BrandClient />
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
                <ShopInfoBanner />
            </React.Fragment>
        );
    }
}

const HomeFooter = connect(mapStateToProps, mapDispatchToProps)(HomeFooterConnected);
export default HomeFooter;