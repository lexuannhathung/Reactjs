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

class BrandClientConnected extends React.Component {

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
                    <h2 className="section-title"><span>Brand &amp; Clients</span></h2>
                    <div className="partners-carousel">
                        <OwlCarousel
                            className=""
                            loop
                            margin={30}
                            autoWidth={true}
                        >
                            <div><a href="#"><img src="/styles/img/preview/partners/brand-logo-1.jpg" alt="" /></a></div>
                            <div><a href="#"><img src="/styles/img/preview/partners/brand-logo-2.jpg" alt="" /></a></div>
                            <div><a href="#"><img src="/styles/img/preview/partners/brand-logo-3.jpg" alt="" /></a></div>
                            <div><a href="#"><img src="/styles/img/preview/partners/brand-logo-4.jpg" alt="" /></a></div>
                            <div><a href="#"><img src="/styles/img/preview/partners/brand-logo-5.jpg" alt="" /></a></div>
                            <div><a href="#"><img src="/styles/img/preview/partners/brand-logo-1.jpg" alt="" /></a></div>
                            <div><a href="#"><img src="/styles/img/preview/partners/brand-logo-2.jpg" alt="" /></a></div>
                            <div><a href="#"><img src="/styles/img/preview/partners/brand-logo-3.jpg" alt="" /></a></div>
                            <div><a href="#"><img src="/styles/img/preview/partners/brand-logo-4.jpg" alt="" /></a></div>
                            <div><a href="#"><img src="/styles/img/preview/partners/brand-logo-5.jpg" alt="" /></a></div>
                            <div><a href="#"><img src="/styles/img/preview/partners/brand-logo-1.jpg" alt="" /></a></div>
                            <div><a href="#"><img src="/styles/img/preview/partners/brand-logo-2.jpg" alt="" /></a></div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        );
    }
}

const BrandClient = connect(mapStateToProps, mapDispatchToProps)(BrandClientConnected);
export default BrandClient;