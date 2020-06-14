import React from 'react';
import './Project.css';

class Project extends React.Component {

    project = this.props.project;

    
    renderProjectFrameworkLanguages(){
        console.log(this.project);
        return Object.keys(this.project.projectframeworklanguages).map(key => {
        return <p key={key}>{this.project.projectframeworklanguages[key]}</p>
        }) 
    }

    render() {
        return (
            <div className="Project">
                <div className="image-container">
                    <img src={this.props.project.projectImgSrc} alt=''/>
                </div>
                <h2 className="project-name">{this.props.project.projectname}</h2>
                <div className="FrameworkLanguages">{this.renderProjectFrameworkLanguages()}</div>
                
            </div>
        );
    }
}

export default Project;