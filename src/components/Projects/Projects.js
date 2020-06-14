import React, { Component } from 'react'
import ProjectsList from './components/ProjectsList/ProjectsList'
import './Projects.css' 

class Projects extends Component {

  projects = [
    {
      projectImgSrc: 'https://ekanimba-myportfolio.s3.eu-central-1.amazonaws.com/myportfoliohomePage.png',
      projectname: 'My Portfolio',
      projectgithuburi: 'local',
      projectframeworklanguages: [
        'React', 'JavaScript', 'Html', 'Css'
      ],
    },
    {
      projectImgSrc: 'https://ekanimba-myportfolio.s3.eu-central-1.amazonaws.com/myportfoliohomePage.png',
      projectname: 'spotmusic',
      projectgithuburi: 'local',
      projectframeworklanguages: [
        'React', 'JavaScript', 'Html', 'Css'
      ],
    },
    {
      projectImgSrc: 'https://ekanimba-myportfolio.s3.eu-central-1.amazonaws.com/myportfoliohomePage.png',
      projectname: 'restaurant',
      projectgithuburi: 'local',
      projectframeworklanguages: [
        'React', 'JavaScript', 'Html', 'Css'
      ],
    }
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