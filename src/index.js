import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'



let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>

    <App store = {store}
      // state = {state}
      // dispatch = {store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
} 
rerenderEntireThree(store.getState())

store.subscribe(() => {
  rerenderEntireThree(store.getState())
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
