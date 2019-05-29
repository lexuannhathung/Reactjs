import * as serviceWorker from './serviceWorker';
import './styles/libs/bootstrap-4.0.0.css';
import './styles/less/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';
import CONSTANTS from './scripts/apps/constants';
import App from './app';

class Main extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path={CONSTANTS.NAVIGATION_URL.HOME} component={App} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();