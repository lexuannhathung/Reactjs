import React from 'react';
import { connect } from 'react-redux';
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

class HomeTopRateConnected extends React.Component {

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
            <section className="page-section">
                <div className="container">
                    <h2 className="section-title"><span>Top Rated Products</span></h2>
                    <div class="top-products-carousel">
                        <OwlCarousel
                            className=""
                            loop
                            margin={30}
                            autoWidth={true}
                            items={6}
                            videoWidth={165}
                        >
                            <StandardItem />
                            <StandardItem />
                            <StandardItem />
                        </OwlCarousel>
                    </div>
                </div>
            </section>

        );
    }
}

const HomeTopRate = connect(mapStateToProps, mapDispatchToProps)(HomeTopRateConnected);
export default HomeTopRate;