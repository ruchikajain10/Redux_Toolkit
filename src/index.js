import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from  '@reduxjs/toolkit';
import {Provider} from  'react-redux'

const initialState ={
  name:"Ruchika",
  age:20,
  status:"coder"
}

const store = configureStore({
  reducer:(state)=>{
    return state
  },
  preloadedState:initialState
})

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
  </React.StrictMode>
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
