import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'react-nhathung';

const mapStateToProps = state => {
    return {
    };
}
const mapDispatchToProps = dispatch => {
    return {
    };
};

class ViewImageConnected extends React.Component {

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
            <Dialog
                {...this.props}
                className="view-image-dialog"
            >
                <div className="rnh-dialog-content">
                    <div className="rnh-dialog-title">
                        <div></div>
                        <a className="close-button" onClick={this.props.handleClose}>X</a>
                    </div>
                    <div className="rnh-dialog-main">
                        <img src={this.props.url} />
                    </div>
                </div>
            </Dialog>
        );
    }
}

const ViewImage = connect(mapStateToProps, mapDispatchToProps)(ViewImageConnected);
export default ViewImage;