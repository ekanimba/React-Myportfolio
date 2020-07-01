import React, { Component } from 'react'
import ProjectsList from './components/ProjectsList/ProjectsList'
import './Projects.css' 

class Projects extends Component {

  projects = [
    {
      projectImgSrc: 'https://ekanimba-myportfolio.s3.eu-central-1.amazonaws.com/myportfoliohomePage.png',
      projectname: 'My Portfolio',
      projectgithuburi: 'https://github.com/ekanimba/React-Myportfolio',
      projectonlineuri: 'https://master.d7391ryaeasfg.amplifyapp.com/',
      projectframeworklanguages: [
        'React', 'JavaScript', 'Html', 'Css'
      ],
    },
    {
      projectImgSrc: 'https://ekanimba-myportfolio.s3.eu-central-1.amazonaws.com/MobileTollSystem.svg',
      projectname: 'Mobile Toll System',
      projectgithuburi: 'https://github.com/ekanimba/MobileTollSystem',
      projectonlineuri: '',
      projectframeworklanguages: [
        'Java', 'Android studio', 'Firebase',
      ],
    },
    {
      projectImgSrc: 'https://ekanimba-myportfolio.s3.eu-central-1.amazonaws.com/screenshot-www-beatplaylist-kanimbaeric-com-1593606402240.png',
      projectname: 'Beat Playlist',
      projectgithuburi: 'https://github.com/ekanimba/Beat-Playlist.git',
      projectonlineuri: 'https://www.beatplaylist.kanimbaeric.com/',
      projectframeworklanguages: [
        'Spotify Api', 'Reactjs', 'HTML','CSS'
      ],
    },
  ];

  render() {
    return (
      <div className="projects-container">
        <div className="project-row">
        <h1>Projects</h1>
        </div>
          <ProjectsList projects={this.projects}/>
      </div>
    )
  }
}

export default Projects