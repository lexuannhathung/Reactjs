import React from 'react';
import { connect } from 'react-redux';
import StandardItem from '../shared/standard-item';

const mapStateToProps = state => {
    return {
    };
}
const mapDispatchToProps = dispatch => {
    return {
    };
};

class HomeTopSellerConnected extends React.Component {

    constructor(props) {
        super(props);
        this.tabs = new function () {
            this.tab_1 = "tab-1";
            this.tab_2 = "tab-2";
            this.tab_3 = "tab-3";
        }
        this.state = new function () {
            this.current_tab = "tab-2";
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
            <React.Fragment>
                <section className="page-section">
                    <div className="container">
                        <div className="tabs">
                            <ul id="tabs" className="nav nav-justified-off">
                                <li className={this.state.current_tab == this.tabs.tab_1 ? "active" : ""}><a href="javascript: void(0)" onClick={this.changeTab.bind(this, this.tabs.tab_1)} data-toggle="tab">Featured</a></li>
                                <li className={this.state.current_tab == this.tabs.tab_2 ? "active" : ""}><a href="javascript: void(0)" onClick={this.changeTab.bind(this, this.tabs.tab_2)} data-toggle="tab">Newest</a></li>
                                <li className={this.state.current_tab == this.tabs.tab_3 ? "active" : ""}><a href="javascript: void(0)" onClick={this.changeTab.bind(this, this.tabs.tab_3)} data-toggle="tab">Top Sellers</a></li>
                            </ul>
                        </div>

                        <div className="tab-content">
                            <div className={"tab-pane fade" + (this.state.current_tab == this.tabs.tab_1 ? " active in" : "")}>
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <StandardItem />
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <StandardItem />
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <StandardItem />
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <StandardItem />
                                    </div>
                                </div>
                            </div>
                            <div className={"tab-pane fade" + (this.state.current_tab == this.tabs.tab_2 ? " active in" : "")}>
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <StandardItem />
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <StandardItem />
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <StandardItem />
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <StandardItem />
                                    </div>
                                </div>
                            </div>
                            <div className={"tab-pane fade" + (this.state.current_tab == this.tabs.tab_3 ? " active in" : "")}>
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <StandardItem />
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <StandardItem />
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <StandardItem />
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <StandardItem />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section class="page-section">
                    <div class="container">
                        <div class="message-box">
                            <div class="message-box-inner">
                                <h2>Free shipping on all orders over $45</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>

        );
    }
}

const HomeTopSeller = connect(mapStateToProps, mapDispatchToProps)(HomeTopSellerConnected);
export default HomeTopSeller;