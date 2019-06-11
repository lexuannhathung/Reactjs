import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import rootAction from '../../actions/action';
import CONSTANTS from '../../scripts/apps/constants';
import GLOBAL_VARIABLES from '../../scripts/apps/global-variables';

const mapStateToProps = state => {
    return {
    };
}
const mapDispatchToProps = dispatch => {
    return {
    };
};

class ProductDetailInfoConnected extends React.Component {

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
                <div className="back-to-category">
                    <span className="link"><i className="fa fa-angle-left"></i> Back to <a href="category.html">Category</a></span>
                    <div className="pull-right">
                        <a className="btn btn-theme btn-theme-transparent btn-previous" href="#"><i className="fa fa-angle-left"></i></a>
                        <a className="btn btn-theme btn-theme-transparent btn-next" href="#"><i className="fa fa-angle-right"></i></a>
                    </div>
                </div>
                <h2 className="product-title">Electronic Product Header Here</h2>
                <div className="product-rating clearfix">
                    <div className="rating">
                        <span className="star"></span>
                        <span className="star active"></span>
                        <span className="star active"></span>
                        <span className="star active"></span>
                        <span className="star active"></span>
                    </div>
                    <a className="reviews" href="#">16 reviews</a> | <a className="add-review" href="#">Add Your Review</a>
                </div>
                <div className="product-availability">Availability: <strong>In stock</strong> 21 Item(s)</div>
                <hr className="page-divider small" />

                <div className="product-price">$400.00</div>
                <hr className="page-divider" />

                <div className="product-text">
                    <p>Etiam eu justo ut nisi sollicitudin bibendum. Fusce sed dui ac turpis vulputate tincidunt vel sed magna. Pellentesque <strong>pretium</strong> mollis metus vel feugiat. Cum sociis natoque penatibus <strong>et magnis</strong> dis parturient montes, nascetur ridiculus mus. <strong>Vestibulum</strong> commodo mauris eget sapien posuere, id <a href="#">efficitur mi tristique</a>.</p>
                    <ul>
                        <li>- Cras tristique neque a mauris volutpat, eget sodales neque elementum.</li>
                        <li>- Vestibulum iaculis velit sed dolor suscipit pretium.</li>
                        <li>- Etiam mattis risus id leo imperdiet tincidunt.</li>
                    </ul>
                </div>
                <hr className="page-divider" />

                <form action="#" className="row variable">
                    <div className="col-sm-6">
                        <div className="form-group selectpicker-wrapper">
                            <label for="exampleSelect1">Size</label>
                            <select
                                id="exampleSelect1"
                                className="form-control selectpicker input-price" data-live-search="true" data-width="100%"
                                data-toggle="tooltip" title="Select">
                                <option>Select Your Size</option>
                                <option>Size 1</option>
                                <option>Size 2</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group selectpicker-wrapper">
                            <label for="exampleSelect2">Color</label>
                            <select
                                id="exampleSelect2"
                                className="form-control selectpicker input-price" data-live-search="true" data-width="100%"
                                data-toggle="tooltip" title="Select">
                                <option>Select Your Color</option>
                                <option>Color 1</option>
                                <option>Color 2</option>
                            </select>
                        </div>
                    </div>
                </form>
                <hr className="page-divider small" />


                <div className="buttons">
                    <div className="quantity">
                        <button className="btn"><i className="fa fa-minus"></i></button>
                        <input className="form-control qty" type="number" step="1" min="1" name="quantity" value="1" title="Qty" />
                        <button className="btn"><i className="fa fa-plus"></i></button>
                    </div>
                    <button className="btn btn-theme btn-cart btn-icon-left" type="submit"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                    <button className="btn btn-theme btn-wish-list"><i className="fa fa-heart"></i></button>
                    <button className="btn btn-theme btn-compare"><i className="fa fa-exchange"></i></button>
                </div>

                <hr className="page-divider small" />

                <table>
                    <tr>
                        <td className="title">Category:</td>
                        <td>Men Dress</td>
                    </tr>
                    <tr>
                        <td className="title">Product Code:</td>
                        <td>PS08</td>
                    </tr>
                    <tr>
                        <td className="title">Tags:</td>
                        <td>Gadgets - clothes - Dress - Men - jean</td>
                    </tr>
                </table>
                <hr className="page-divider small" />
                <ul className="social-icons list-inline">
                    <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                </ul>
            </React.Fragment>
        );
    }
}

const ProductDetailInfo = connect(mapStateToProps, mapDispatchToProps)(ProductDetailInfoConnected);
export default withRouter(ProductDetailInfo);