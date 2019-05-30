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

class SmallStandardItemConnected extends React.Component {

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
            <div className="media">
                <a className="pull-left media-link" href="#">
                    <img className="media-object" src="styles/img/preview/shop/top-sellers-7.jpg" alt="" />
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
        );
    }
}

const SmallStandardItem = connect(mapStateToProps, mapDispatchToProps)(SmallStandardItemConnected);
export default SmallStandardItem;