import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-fixed-top">
        <a className="navbar-brand" href=""><i class="fas fa-align-left"></i></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">Contact</a>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            <li><button className="btn social"><i class="fab fa-facebook"></i></button></li>
            <li><button className="btn social"><i class="fab fa-instagram"></i></button></li>
            <li><button className="btn social"><i class="fab fa-twitter"></i></button></li>
            <li><button className="btn social"><i class="fab fa-linkedin"></i></button></li>
          </ul>
        </div>

      </nav>

    );
  }
}

export default Navbar;
