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

class StandardItemConnected extends React.Component {

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
            <div className="thumbnail no-border no-padding">
                <div className="media">
                    <a className="media-link" data-gal="prettyPhoto" href="styles/img/preview/shop/product-1-big.jpg">
                        <img src="styles/img/preview/shop/product-1.jpg" alt="" />
                        <span className="icon-view"><strong><i className="fa fa-eye"></i></strong></span>
                    </a>
                </div>
                <div className="caption text-center">
                    <h4 className="caption-title"><a href="product-details.html">Electronic Product Header</a></h4>
                    <div className="rating">
                        <span className="star"></span>
                        <span className="star active"></span>
                        <span className="star active"></span>
                        <span className="star active"></span>
                        <span className="star active"></span>
                    </div>
                    <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                    <div className="buttons">
                        <a className="btn btn-theme btn-theme-transparent btn-wish-list" href="#"><i className="fa fa-heart"></i></a>
                        <a className="btn btn-theme btn-theme-transparent btn-icon-left" href="#"><i className="fa fa-shopping-cart"></i>Add to Cart</a>
                        <a className="btn btn-theme btn-theme-transparent btn-compare" href="#"><i className="fa fa-exchange"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

const StandardItem = connect(mapStateToProps, mapDispatchToProps)(StandardItemConnected);
export default StandardItem;