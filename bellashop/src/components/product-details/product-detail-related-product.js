import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import rootAction from '../../actions/action';
import CONSTANTS from '../../scripts/apps/constants';
import GLOBAL_VARIABLES from '../../scripts/apps/global-variables';
import StandardItem from '../shared/standard-item';
import OwlCarousel from 'react-owl-carousel';

const mapStateToProps = state => {
    return {
    };
}
const mapDispatchToProps = dispatch => {
    return {
    };
};

class ProductDetailRelatedProductConnected extends React.Component {

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
                    <h2 className="section-title section-title-lg"><span>Related Products</span></h2>
                    <div className="featured-products-carousel">
                        <OwlCarousel
                            className=""
                            loop
                            margin={30}
                            autoWidth={true}
                        >
                            <StandardItem />
                            <StandardItem />
                            <StandardItem />
                        </OwlCarousel>
                    </div>
                    <hr className="page-divider half" />
                    <a className="btn btn-theme btn-view-more-block" href="#" style={{ maxWidth: '100%'}}>View More</a>
                </div>
            </section>
        );
    }
}

const ProductDetailRelatedProduct = connect(mapStateToProps, mapDispatchToProps)(ProductDetailRelatedProductConnected);
export default withRouter(ProductDetailRelatedProduct);