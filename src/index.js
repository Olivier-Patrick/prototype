//---------------------------------------------------------------
// Developed by INTELLCAP for FM6E.org
// Modeling  : Abderrazak Elhani, Ismail Ait Mellal, Idriss Ilali
// Developer : Abderrazak Elhani
// Graphics  : Salima Bennouri
// Content   : Ismail Ait Mellal, Idriss Ilali
//---------------------------------------------------------------
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//---
import { createStore } from 'redux'
import reducer from './Settings/ReduxStore/reducer'

import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

const Middleman = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    )
}

ReactDOM.render(<Middleman />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
