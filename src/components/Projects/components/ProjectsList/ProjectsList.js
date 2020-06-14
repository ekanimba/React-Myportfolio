import React from 'react';
import './ProjectsList.css';
import Project from '../Project/Project';

class ProjectsList extends React.Component {

    projects = this.props.projects;
    render() {
 
        return (
            <div className="ProjectsList">
                {
                    Object.keys(this.projects).map(key => {
                        return <Project key={key} project={this.projects[key]}/>
                    })
                }
            </div>
        );
    }
}

export default ProjectsList;

 