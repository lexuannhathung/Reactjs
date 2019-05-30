import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

class HeaderConnected extends React.Component {

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
            <div id="header">
                <div className="top-bar">
                    <div className="container">
                        <div className="top-bar-left">
                            <ul className="list-inline">
                                <li className="icon-user"><a href="login.html"><img src="styles/img/icon-1.png" alt="" /> <span>Login</span></a></li>
                                <li className="icon-form"><a href="login.html"><img src="styles/img/icon-2.png" alt="" /> <span>Not a Member? <span className="colored">Sign Up</span></span></a></li>
                                <li><a href="mailto:support@yourdomain.com"><i className="fa fa-envelope"></i> <span>support@yourdomain.com</span></a></li>
                            </ul>
                        </div>
                        <div className="top-bar-right">
                            <ul className="list-inline">
                                <li className="hidden-xs"><a href="about.html">About</a></li>
                                <li className="hidden-xs"><a href="blog.html">Blog</a></li>
                                <li className="hidden-xs"><a href="accountinformation.html">My Account</a></li>
                                <li className="hidden-xs"><a href="contact.html">Contact</a></li>
                                <li className="hidden-xs"><a href="faq.html">FAQ</a></li>
                                <li className="hidden-xs"><a href="wishlist.html">My Wishlist</a></li>
                                <li className="dropdown currency">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">€ EURO<i className="fa fa-angle-down"></i></a>
                                    <ul role="menu" className="dropdown-menu">
                                        <li><a href="#">€ EURO</a></li>
                                        <li><a href="#">€ EURO</a></li>
                                        <li><a href="#">€ EURO</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown flags">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><img src="styles/img/flag.gif" alt="" /> Eng<i className="fa fa-angle-down"></i></a>
                                    <ul role="menu" className="dropdown-menu">
                                        <li><a href="#"><img src="styles/img/flag.gif" alt="" /> Eng</a></li>
                                        <li><a href="#"><img src="styles/img/flag.gif" alt="" /> Eng</a></li>
                                        <li><a href="#"><img src="styles/img/flag.gif" alt="" /> Eng</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <header className="header fixed">
                    <div className="header-wrapper">
                        <div className="container">
                            <div className="logo">
                                <a href="index.html"><img src="styles/img/logo-bella-shop.png" alt="Bella Shop" /></a>
                            </div>
                            <div className="header-search">
                                <input className="form-control" type="text" placeholder="What are you looking?" />
                                <button><i className="fa fa-search"></i></button>
                            </div>
                            <div className="header-cart">
                                <div className="cart-wrapper">
                                    <a href="wishlist.html" className="btn btn-theme-transparent hidden-xs hidden-sm"><i className="fa fa-heart"></i></a>
                                    <a href="compare-products.html" className="btn btn-theme-transparent hidden-xs hidden-sm"><i className="fa fa-exchange"></i></a>
                                    <a href="#" className="btn btn-theme-transparent" data-toggle="modal" data-target="#popup-cart"><i className="fa fa-shopping-cart"></i> <span className="hidden-xs"> 0 item(s) - $0.00 </span> <i className="fa fa-angle-down"></i></a>
                                    <a href="#" className="menu-toggle btn btn-theme-transparent"><i className="fa fa-bars"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="navigation-wrapper">
                        <div className="container">
                            <nav className="navigation closed clearfix">
                                <a href="#" className="menu-toggle-close btn"><i className="fa fa-times"></i></a>
                                <ul className="nav sf-menu">
                                    <li className="active"><a href="index.html">Homepage</a>
                                        <ul>
                                            <li><a href="index.html">Homepage 1</a></li>
                                            <li><a href="index-2.html">Homepage 2</a></li>
                                            <li><a href="index-3.html">Homepage 3</a></li>
                                            <li><a href="index-4.html">Homepage 4</a></li>
                                            <li><a href="index-5.html">Homepage 5</a></li>
                                            <li><a href="index-6.html">Homepage 6</a></li>
                                            <li><a href="index-7.html">Homepage 7</a></li>
                                            <li><a href="index-8.html">Homepage 8</a></li>
                                            <li><a href="index-9.html">Homepage 9</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="category.html">Shop</a>
                                        <ul>
                                            <li><a href="category.html">Shop Sidebar Left</a></li>
                                            <li><a href="category-right.html">Shop Sidebar Right</a></li>
                                            <li><a href="category-list.html">Shop List View</a></li>
                                            <li><a href="product-details.html">Product Page</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Blog</a>
                                        <ul>
                                            <li><a href="blog.html">Blog Sidebar Left </a></li>
                                            <li><a href="blog-right.html">Blog Sidebar Right</a></li>
                                            <li><a href="blog-post.html">Blog Single Post</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="portfolio.html">Portfolio</a>
                                        <ul>
                                            <li><a href="portfolio.html">Portfolio 3 columns</a></li>
                                            <li><a href="portfolio-4col.html">Portfolio 4 columns</a></li>
                                            <li><a href="portfolio-alt.html">Portfolio Alternate</a></li>
                                            <li><a href="portfolio-single.html">Portfolio Single</a></li>
                                        </ul>
                                    </li>
                                    <li className="megamenu"><a href="#">Features</a>
                                        <ul>
                                            <li className="row">
                                                <div className="col-md-2">
                                                    <h4 className="block-title"><span> MOBILES & ACCESSORIES</span></h4>
                                                    <ul>
                                                        <li><a href="#">Mobiles</a></li>
                                                        <li><a href="#">Mobile Headphones</a></li>
                                                        <li><a href="#">Mobile Screen Guards</a></li>
                                                        <li><a href="#">Mobile Cases & Covers</a></li>
                                                        <li><a href="#">Tablet Speakers</a></li>
                                                        <li><a href="#">Chargers</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-2">
                                                    <h4 className="block-title"><span> COMPUTERS</span></h4>
                                                    <ul>
                                                        <li><a href="#">Headphones</a></li>
                                                        <li><a href="#">Laptops</a></li>
                                                        <li><a href="#">Mouse</a></li>
                                                        <li><a href="#">Laptop Skins & Decals</a></li>
                                                        <li><a href="#">Keyboards</a></li>
                                                        <li><a href="#">Processor Coolers</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-2">
                                                    <h4 className="block-title"><span>Pages</span></h4>
                                                    <ul>
                                                        <li><a href="shortcodes.html"><strong>Shortcodes</strong></a></li>
                                                        <li><a href="typography.html"><strong>Typography</strong></a></li>
                                                        <li><a href="coming-soon.html"><strong>Coming soon</strong></a></li>
                                                        <li><a href="error-page.html"><strong>404 Page</strong></a></li>
                                                        <li><a href="about.html"><strong>About</strong></a></li>
                                                        <li><a href="login.html"><strong>Login</strong></a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-2 visible-xs">
                                                    <h4 className="block-title"><span>My Account</span></h4>
                                                    <ul>
                                                        <li><a href="accountinformation.html"> Account Information </a></li>
                                                        <li><a href="myaccount.html">My Account</a></li>
                                                        <li><a href="cng-pw.html">Change Password</a></li>
                                                        <li><a href="address-book.html">Address Books</a></li>
                                                        <li><a href="order-history.html">Order History</a></li>
                                                        <li><a href="review-rating.html">Reviews and Ratings</a></li>
                                                        <li><a href="return.html">Returns Requests</a></li>
                                                        <li><a href="newsletter.html">Newsletter</a></li>
                                                        <li><a href="myaccount-leftsidebar.html">Left Sidebar</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <h4 className="block-title"><span>Header styles</span></h4>
                                                    <ul>
                                                        <li><a href="index-style-1.html"><strong>Header style 1</strong></a></li>
                                                        <li><a href="index-style-2.html"><strong>Header style 2</strong></a></li>
                                                        <li><a href="index-style-3.html"><strong>Header style 3</strong></a></li>
                                                        <li><a href="index-style-4.html"><strong>Header style 4</strong></a></li>
                                                        <li><a href="index-style-5.html"><strong>Header style 5</strong></a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="product-list">
                                                        <div className="media">
                                                            <a className="pull-left media-link" href="#">
                                                                <img className="media-object" src="styles/img/preview/shop/top-sellers-2.jpg" alt="" />
                                                                <i className="fa fa-plus"></i></a>
                                                            <div className="media-body">
                                                                <h4 className="media-heading"><a href="#">Electronic Product Header</a></h4>
                                                                <div className="rating">
                                                                    <span className="star"></span>
                                                                    <span className="star active"></span>
                                                                    <span className="star active"></span>
                                                                    <span className="star active"></span>
                                                                    <span className="star active"></span>
                                                                </div>
                                                                <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                                                            </div>
                                                        </div>
                                                        <div className="media">
                                                            <a className="pull-left media-link" href="#">
                                                                <img className="media-object" src="styles/img/preview/shop/top-sellers-3.jpg" alt="" />
                                                                <i className="fa fa-plus"></i>
                                                            </a>
                                                            <div className="media-body">
                                                                <h4 className="media-heading"><a href="#">Electronic Product Header</a></h4>
                                                                <div className="rating">
                                                                    <span className="star"></span>
                                                                    <span className="star active"></span>
                                                                    <span className="star active"></span>
                                                                    <span className="star active"></span>
                                                                    <span className="star active"></span>
                                                                </div>
                                                                <div className="price"><ins>$400.00</ins> <del>$425.00</del></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="category.html"> Computers</a></li>
                                    <li><a href="category.html">Mobiles & Accessories</a></li>
                                    <li><a href="category.html"> Home Entertainment</a></li>
                                    <li><a href="category.html">New</a></li>
                                    <li className="sale"><a href="category.html">Sale</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderConnected);
export default withRouter(Header);