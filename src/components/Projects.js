import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="App color1">
        <h3 class="header">Projects</h3>
        <a href="https://github.com/mdantuono"><i class="fab fa-github"></i> My GitHub</a>
        <h6 className="color2">Some Featured Projects:</h6>
        <table>
          <tr>
            <td>
              <h6><a href="https://github.com/mdantuono/CSharp-Scraper">C# Web Scraper</a></h6>
              <a href="https://github.com/mdantuono/CSharp-Scraper"><img className="small-img" src="https://camo.githubusercontent.com/0617f4657fef12e8d16db45b8d73def73144b09f/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67" alt="C# Scraper"/></a><br/>
              <p>A Web Scraper written in C# using Selenium</p>
            </td>
            <td>
              <h6><a href="https://github.com/mdantuono/cs50">Harvard CS50 Problem Sets</a></h6>
              <a href="https://github.com/mdantuono/cs50"><img className="small-img" src="https://prod-discovery.edx-cdn.org/media/course/image/0c675c29-54ee-42ff-ac95-01f53450bc8b-aaffd76ac491.small.jpg" alt="Cs50 Psets"/></a><br/>
              <p>Completed problem sets from Harvard's CS50 Course</p>
            </td>
          </tr>
          <tr>
            <td>
              <h6><a href="https://github.com/mdantuono/TDD">TDD Practice</a></h6>
              <a href="https://github.com/mdantuono/TDD"><img className="small-img" src="https://jfiaffe.files.wordpress.com/2014/09/redgreenrefacor.png" alt="TDD"/></a><br/>
              <p>Some Test Driven Development practice using Visual Studio and NUnit</p>
            </td>
            <td>
              <h6><a href="https://github.com/mdantuono/weather-API">Simple Weather API</a></h6>
              <a href="https://github.com/mdantuono/weather-API"><img className="small-img" src="https://cdn.pixabay.com/photo/2017/06/14/01/14/storage-in-the-cloud-2400720_1280.png" alt="Weather API"/></a><br/>
              <p>A very simple weather API script using OpenWeatherMap</p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Projects;
