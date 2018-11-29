import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Projects />, document.getElementById('projects'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Contact />, document.getElementById('contact'));
// ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<SideNav />, document.getElementById('sidenavbar'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
