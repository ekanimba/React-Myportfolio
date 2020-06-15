import React from 'react';
import './Project.css';

class Project extends React.Component {

    project = this.props.project;
    githubIcon = "https://ekanimba-myportfolio.s3.eu-central-1.amazonaws.com/icon_github.svg";
    onlineIcon = "https://ekanimba-myportfolio.s3.eu-central-1.amazonaws.com/icon_external_link.svg";

    directuri(link){
        window.open(link);
    }

    renderGithubIconUri(){
        if(this.project.projectgithuburi){
            return <img key={this.project.projectgithuburi} src={this.githubIcon} alt={''} onClick={ () => this.directuri(this.project.projectgithuburi) }></img>
            
        }
    }
    renderOnlineIconUri(){
        if(this.project.projectonlineuri){
            return <img key={this.project.projectonlineuri} src={this.onlineIcon} alt={''} onClick={ () => this.directuri(this.project.projectonlineuri) }></img>
            
        }
    }
    
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
                <div className="projectname-projecturi">
                    <h2 className="project-name">{this.props.project.projectname}</h2>
                    {this.renderGithubIconUri()}
                    {this.renderOnlineIconUri()}
                </div>
                

                <div className="FrameworkLanguages">{this.renderProjectFrameworkLanguages()}</div>
                
            </div>
        );
    }
}

export default Project;