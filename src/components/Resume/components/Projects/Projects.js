import React from 'react';
import './Projects.css'
class Projects extends React.Component {

    projects = this.props.projects;
    
    renderProjects(){
        return Object.keys(this.projects).map(key => {
            let startend = `${this.projects[key].start} - ${this.projects[key].end}`
            let applicationprojectname = `${this.projects[key].projectapplication} : ${this.projects[key].projectname}`;
            let activities = []
            for (var i = 0; i < this.projects[key].activities.length; i++) {
                activities.push(
                    <div key={i} className="activitie">
                        <div className="blackDotactivitie"></div>
                        <p>{this.projects[key].activities[i]}</p>
                    </div>
                )
            }
            return (
                <div key={key} >
                    <div className="applicationprojectname-location">
                        <p>{applicationprojectname}</p>
                        <p id="location">{this.projects[key].location}</p>
                    </div>
                    <p className="startend">{startend}</p>
                    <p className="department">{this.projects[key].department}</p>
                    {activities}
                </div>
            )
        });
    }
    render(){
        return (
            <div className="projects">
                {this.renderProjects()}
            </div>
        );
    }
    
}

export default Projects;