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

class App extends React.Component {
  state = {
    isTop: true,
    navExpanded: false
  };

  componentDidMount(){
    document.addEventListener('scroll', ()=> {
      const isTop = window.scrollY < 100;
      if(isTop !== this.state.isTop){
        this.setState({ isTop})
      }
    })
  }
  render() {
    return (

      <div className='App-background'>
        <BrowserRouter>
        <div className="App">
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
        <SocialMediaIcon />
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
