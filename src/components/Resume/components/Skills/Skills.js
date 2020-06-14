import React from 'react';
import './Skills.css'
class Skills extends React.Component {

    skills = this.props.skills;

    renderSkills(){
        return Object.keys(this.skills).map(key => {
            return (
                <div key={key} >
                    <p>{this.skills[key]}</p>
                </div>
            )
        });
    }
    
    render(){
        return (
            <div className="skills">
                {this.renderSkills()}
            </div>
        );
    }
    
}

export default Skills;