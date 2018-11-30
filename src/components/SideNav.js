import React, { Component } from 'react';

class SideNav extends Component {
  constructor(props) {
        super(props);
        this.state = {
          width: '0',
        };
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }


  openNav() {
    this.setState({
      width: '250px'
    });
      // document.getElementById("mySidenav").style.width = "250px";
      // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  closeNav() {
    this.setState({
      width: '0'
    });
      // document.getElementById("mySidenav").style.width = "0";
      // document.body.style.backgroundColor = "white";
  }

  render() {
    const styles = {
      navstyle: {
        width: this.state.width
      }
    };

    const { navstyle } = styles;

    return (
      <div>
        <a href="javascript:void(0)" class="openbtn" onClick={this.openNav}>
          <i class="fas fa-align-left"></i>
        </a>
        <div id="mySidenav" class="sidenav" style={navstyle}>
          <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <br/>
          <a href="https://www.facebook.com/mikeishere3"><button className="btn social"><i class="fab fa-facebook"></i></button></a>
          <a href="https://www.instagram.com/mike_dantuono/"><button className="btn social"><i class="fab fa-instagram"></i></button></a>
          <a href="https://twitter.com/Mike_DAntuono"><button className="btn social"><i class="fab fa-twitter"></i></button></a>
          <a href="https://www.linkedin.com/in/michael-dantuono/"><button className="btn social"><i class="fab fa-linkedin"></i></button></a>
        </div>
      </div>
    );
  }
}

export default SideNav;
