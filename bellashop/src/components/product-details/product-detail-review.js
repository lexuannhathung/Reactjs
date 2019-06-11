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

class ProductDetailReviewConnected extends React.Component {

    constructor(props) {
        super(props);
        this.tabs = new function () {
            this.description = "description";
            this.review = "review";
        }
        this.state = new function () {
            this.current_tab = "description";
        }
    }

    componentDidMount() {
        this.Init();
    }
    componentWillUnmount() {
    }

    //events
    changeTab = (tab) => {
        this.setState({ current_tab: tab });
    }

    //functions
    Init() {
    }

    render() {
        return (
            <section className="page-section">
                <div className="container">
                    <div className="tabs-wrapper content-tabs">
                        <ul className="nav nav-tabs">
                            <li className={this.state.current_tab == this.tabs.description ? "active" : ""}><a href="javascript:void(0)" onClick={this.changeTab.bind(this, this.tabs.description)} data-toggle="tab">Item Description</a></li>
                            <li className={this.state.current_tab == this.tabs.review ? "active" : ""}><a href="javascript:void(0)" onClick={this.changeTab.bind(this, this.tabs.review)} data-toggle="tab">Reviews (2)</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className={"tab-pane fade" + (this.state.current_tab == this.tabs.description ? " active in" : "")} id="item-description">
                                <p>Integer egestas, orci id condimentum eleifend, nibh nisi pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet lectus sed odio eleifend, at iaculis dolor egestas. Nunc elementum pellentesque augue sodales porta. Etiam aliquet rutrum turpis, feugiat sodales ipsum consectetur nec. </p>
                                <p>Morbi imperdiet lacus nec ante blandit, sit amet fermentum magna faucibus. Nunc nec libero id urna vulputate venenatis. Aenean vulputate odio felis, in rhoncus sapien auctor nec. Donec non posuere sem. Ut quis egestas libero, mattis gravida nibh. Phasellus a nisi ac mi luctus tincidunt et non est. Proin ac orci rhoncus arcu bibendum molestie vel et metus. Aenean iaculis purus et velit iaculis, nec convallis ipsum ornare. Integer a orci enim.</p>
                            </div>
                            <div className={"tab-pane fade" + (this.state.current_tab == this.tabs.review ? " active in" : "")} id="reviews">
                                <div className="comments">
                                    <div className="media comment">
                                        <a href="#" className="pull-left comment-avatar">
                                            <img alt="" src="/styles/img/preview/avatars/avatar-1.jpg" className="media-object" />
                                        </a>
                                        <div className="media-body">
                                            <p className="comment-meta"><span className="comment-author"><a href="#">User Name Here</a> <span className="comment-date"> 26 days ago <i className="fa fa-flag"></i></span></span></p>
                                            <p className="comment-text">Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismd. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere.</p>
                                        </div>
                                    </div>
                                    <div className="media comment">
                                        <a href="#" className="pull-left comment-avatar">
                                            <img alt="" src="/styles/img/preview/avatars/avatar-3.jpg" className="media-object" />
                                        </a>
                                        <div className="media-body">
                                            <p className="comment-meta"><span className="comment-author"><a href="#">User Name Here</a> <span className="comment-date"> 26 days ago <i className="fa fa-flag"></i></span></span></p>
                                            <p className="comment-text">Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismd. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="comments-form">
                                    <h4 className="block-title">Add a Review</h4>
                                    <form method="post" action="#" name="comments-form" id="comments-form">
                                        <div className="form-group"><input type="text" placeholder="Your name and surname" className="form-control" title="comments-form-name" name="comments-form-name" /></div>
                                        <div className="form-group"><input type="text" placeholder="Your email adress" className="form-control" title="comments-form-email" name="comments-formemail" /></div>
                                        <div className="form-group"><textarea placeholder="Your message" className="form-control" title="comments-form-comments" name="comments-form-comments" rows="6"></textarea></div>
                                        <div className="form-group"><button type="submit" className="btn btn-theme btn-theme-transparent btn-icon-left" id="submit"><i className="fa fa-comment"></i> Review</button></div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const ProductDetailReview = connect(mapStateToProps, mapDispatchToProps)(ProductDetailReviewConnected);
export default withRouter(ProductDetailReview);