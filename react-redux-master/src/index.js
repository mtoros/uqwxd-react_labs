import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
// import * as serviceWorker from './serviceWorker';

//import {configureStore} from 'redux';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import myReducers from './reducers'


//Create the store
const myStore = createStore(myReducers);
//const myStore = configureStore(myReducers);

//This will console log the current state everytime the state changes
myStore.subscribe(()=>console.log(myStore.getState()));

//Enveloping the App inside the Provider, ensures that the states in the store are available
//throughout the application
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<Provider store={myStore}><App/></Provider>);
//ReactDOM.render(<Provider store={myStore}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

