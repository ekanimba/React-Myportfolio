import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home-container">
        <div className="home">
          <h1>Web Developer.</h1>
          <p>I'm a software engineer based in Lodz, Currently learning Reactjs</p>
          <div className="button">
            <Button variant="dark" as={NavLink} to={'/Projects'}>EXPLORE WORK</Button>
            <Button variant="dark" as={NavLink} to={'/Resume'}>VIEW RESUME</Button>
          </div>
        </div>
          
      </div>
    )
  }c
}

export default Home;