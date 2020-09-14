import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import App from './js/App';
import './index.css';
import Routes from "./js/Routs";
// import Navigation from './components/Navbar';

ReactDOM.render(
    <Router>
        <Routes/>
    </Router>,
  // <MainPage />,
  document.getElementById('root')
);
