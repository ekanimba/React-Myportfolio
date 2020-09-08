import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import './Home.css'
import { TimelineMax , Power1} from "gsap/all";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);


class Home extends Component {

  constructor(props) {
    super(props);
    this.timeline = new TimelineMax({ paused: true});
  }
  componentDidMount() {
    this.timeline
      .from(['.home-header', '.button', '.home-content'],0,{
        visibility: "hidden",
      })
      .from('.home-header', 0.5, {
        opacity: 0,
        delay: 1,
        x: 100,
        ease: Power1.easeInOut
      })
      .from('.home-content', 0.5, {
        opacity: 0,
        y: 100,
        ease: Power1.easeInOut
      })
      .from(this.buttonProjects, 0.5, {
        opacity: 0,
        y: 100,
        ease: Power1.easeInOut
      })
      .from(this.buttonResume, 0.5, {
        opacity: 0,
        y: 100,
        ease: Power1.easeInOut
      });
      
    this.timeline.play();
  }

  render() {
    return (
      <div className="Home-container">
        <div className="home">
          <div className="home-header">
            <h1>Web Developer.</h1>
          </div>
          <div className="home-content">
            <p>I'm a software engineer based in Lodz, Currently learning Reactjs</p>
          </div>
          
            <div className="button">
            <div ref={div => (this.buttonProjects = div)} >
              <Button variant="dark" as={NavLink} to={'/Projects'}>EXPLORE WORK</Button>
            </div>
            <div ref={div => (this.buttonResume = div)}>
              <Button variant="dark" as={NavLink} to={'/Resume'}>VIEW RESUME</Button>
            </div>
            </div>
  
        </div>
          
      </div>
    )
  }
}

export default Home;