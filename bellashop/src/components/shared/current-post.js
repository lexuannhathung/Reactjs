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

class CurrentPostConnected extends React.Component {

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
            <div className="recent-post">
                <div className="media">
                    <a className="pull-left media-link" href="#">
                        <img className="media-object" src="styles/img/preview/blog/recent-post-4.jpg" alt="" />
                        <i className="fa fa-plus"></i>
                    </a>
                    <div className="media-body">
                        <p className="media-category"><a href="#">Man</a> / <a href="#">Accessories</a></p>
                        <h4 className="media-heading"><a href="#">Electronic Post Comment Header Here</a></h4>
                        Fusce gravida interdum eros a mollis. Sed non lorem varius, volutpat nisl in, laoreet ante.
                                            <div className="media-meta">
                            6th June 2014
                                                <span className="divider">/</span><a href="#"><i className="fa fa-comment"></i>27</a>
                            <span className="divider">/</span><a href="#"><i className="fa fa-heart"></i>18</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const CurrentPost = connect(mapStateToProps, mapDispatchToProps)(CurrentPostConnected);
export default CurrentPost;