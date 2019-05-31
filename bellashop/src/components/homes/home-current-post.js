import React from 'react';
import { connect } from 'react-redux';
import CurrentPost from '../shared/current-post';

const mapStateToProps = state => {
    return {
    };
}
const mapDispatchToProps = dispatch => {
    return {
    };
};

class HomeCurrentPostConnected extends React.Component {

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
                    <a className="btn btn-theme btn-title-more btn-icon-left" href="#"><i className="fa fa-file-text-o"></i>See All Posts</a>
                    <h2 className="block-title"><span>Our Recent posts</span></h2>
                    <div className="row">
                        <div className="col-md-6">
                            <CurrentPost />
                        </div>
                        <div className="col-md-6">
                            <CurrentPost />
                        </div>
                        <div className="col-md-6">
                            <CurrentPost />
                        </div>
                        <div className="col-md-6">
                            <CurrentPost />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const HomeCurrentPost = connect(mapStateToProps, mapDispatchToProps)(HomeCurrentPostConnected);
export default HomeCurrentPost;