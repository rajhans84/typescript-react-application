import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'redux';
import { BrowserRouter } from "react-router-dom";
import configureStore, { IAppState } from './store/store';
import './App.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';


interface IProps {
  store: Store<IAppState>;
}

const Root: React.SFC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
