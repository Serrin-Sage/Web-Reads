import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './about-style.css'
import './user-style.css'
import './search-bar.css'
import './themes.scss'
import './picswitch.scss'
import './book-list.css'
import './ml-page.css'
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root'),
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
