import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navb from '../NavHeader/NavHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SocialMediaIcon from '../SocialmediaIcon/SocialmediaIcon'
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import { TimelineMax , Power1} from "gsap/all";
import Background from './background.jpg';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isTop: true,
      navExpanded: false,
      imageStatus : "loading",
    }
    this.timeline = new TimelineMax({ paused: true});
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded"});
  }

  handleImageErrored() {
    this.setState( { imageStatus: "failed to load"});
  }

  componentDidMount(){
    this.timeline
    .from(this.socialmediaicon, 1, {
      display: "none",
      autoAlpha: 0,
      delay: 1,
      
      ease: Power1.easeInOut
    })
    this.timeline.play();
    document.addEventListener('scroll', ()=> {
      const isTop = window.scrollY < 100;
      if(isTop !== this.state.isTop){
        this.setState({ isTop})
      }
    })
  }
  render() {
    const divStyle = {
      backgroundImage: "url(" + Background + ")"
    };
    
    return (
      
      <div className='App-background'>
        <BrowserRouter>
        <div
          className="App" 
          style={divStyle} 
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
          >
          <Navb isTop={this.state.isTop} navExpanded={this.state.navExpanded}/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/aboutme' component={AboutMe}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/Resume' component={Resume}/>
          </Switch>
        </div>
        </BrowserRouter>
        <div ref={div => (this.socialmediaicon = div)}>
          <SocialMediaIcon />
        </div>
        
        <footer>
          <div className="footer">
            <p>Copyright © 2020 Kanimba Eric • Web Designer & Developer</p>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
