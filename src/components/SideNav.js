import React, { Component } from 'react';

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

class SideNav extends Component {
  render() {
    return (
      <div>
        <a href="javascript:void(0)" class="openbtn" onclick="openNav()">
          <i class="fas fa-align-left"></i>
        </a>
        <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <br/>
          <ul>
            <li><a href="https://www.facebook.com/mikeishere3"><button className="btn social"><i class="fab fa-facebook"></i></button></a></li>
            <li><a href="https://www.instagram.com/mike_dantuono/"><button className="btn social"><i class="fab fa-instagram"></i></button></a></li>
            <li><a href="https://twitter.com/Mike_DAntuono"><button className="btn social"><i class="fab fa-twitter"></i></button></a></li>
            <li><a href="https://www.linkedin.com/in/michael-dantuono/"><button className="btn social"><i class="fab fa-linkedin"></i></button></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideNav;
