import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <a className="navbar-brand" href="/">Oi</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Contact</a>
            </li>
          </ul>
        </div>

      </nav>

    );
  }
}

export default Navbar;
