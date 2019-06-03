import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
    };
}
const mapDispatchToProps = dispatch => {
    return {
    };
};

class HomeHeaderConnected extends React.Component {

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
            <section className="page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="thumbnail no-border no-padding thumbnail-banner size-3x3">
                                <div className="media">
                                    <a className="media-link" href="#">
                                        <div className="img-bg" style={{ backgroundImage: "url('/styles/img/preview/shop/banner-3.jpg')" }}></div>
                                        <div className="caption">
                                            <div className="caption-wrapper div-table">
                                                <div className="caption-inner div-cell">
                                                    <h2 className="caption-title"><span>Lorem Ipsum</span></h2>
                                                    <h3 className="caption-sub-title"><span>Dolor Sir Amet Percpectum</span></h3>
                                                    <span className="btn btn-theme btn-theme-sm">Shop Now</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="thumbnail no-border no-padding thumbnail-banner size-2x3">
                                <div className="media">
                                    <a className="media-link" href="#">
                                        <div className="img-bg" style={{ backgroundImage: "url('/styles/img/preview/shop/banner-4.jpg')" }}></div>
                                        <div className="caption text-right">
                                            <div className="caption-wrapper div-table">
                                                <div className="caption-inner div-cell">
                                                    <h2 className="caption-title"><span>Lorem Ipsum</span></h2>
                                                    <h3 className="caption-sub-title"><span>Dolor Sir Amet Percpectum</span></h3>
                                                    <span className="btn btn-theme btn-theme-sm">Shop Now</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="thumbnail no-border no-padding thumbnail-banner size-2x3">
                                <div className="media">
                                    <a className="media-link" href="#">
                                        <div className="img-bg" style={{ backgroundImage: "url('/styles/img/preview/shop/banner-5.jpg')" }}></div>
                                        <div className="caption">
                                            <div className="caption-wrapper div-table">
                                                <div className="caption-inner div-cell">
                                                    <h2 className="caption-title"><span>Lorem Ipsum</span></h2>
                                                    <h3 className="caption-sub-title"><span>Dolor Sir Amet Percpectum</span></h3>
                                                    <span className="btn btn-theme btn-theme-sm">Shop Now</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const HomeHeader = connect(mapStateToProps, mapDispatchToProps)(HomeHeaderConnected);
export default HomeHeader;