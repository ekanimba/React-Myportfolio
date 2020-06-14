import React from 'react';
import './Education.css'
class Education extends React.Component {

    education = this.props.education;
    
    renderEducation(){
        return Object.keys(this.education).map(key => {
            let startend = `${this.education[key].start} - ${this.education[key].end}`
            let sectionschoolname = `${this.education[key].section} , ${this.education[key].schoolname}`;
            let courses = [];
            
            for (var i = 0; i < this.education[key].courses.length; i++) {
                courses.push(
                    <div key={i} className="course">
                        <div className="blackDotcourse"></div>
                        <p>{this.education[key].courses[i]}</p>
                    </div>
                )
            }
            return (
                <div key={key} >
                    <div className="schoolname-locationcity">
                        <p>{sectionschoolname}</p>
                        <p id="locationcity">{this.education[key].locationcity}</p>
                    </div>
                    <p className="startend">{startend}</p>
                    <p className="department">{this.education[key].department}</p>
                    {courses}
                </div>
            )
        });
    }
    render(){
        return (
            <div className="Education">
                {this.renderEducation()}
            </div>
        );
    }
    
}

export default Education;