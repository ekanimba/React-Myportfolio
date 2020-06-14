import React from 'react';
import './EmploymentHistory.css'
class EmploymentHistory extends React.Component {

    employmentHistory = this.props.employmentHistory;
    
    renderEmploymentHistory(){
        return Object.keys(this.employmentHistory).map(key => {
            let startend = `${this.employmentHistory[key].start} - ${this.employmentHistory[key].end}`
            let jobtitlecompanyname = `${this.employmentHistory[key].jobtitle} : ${this.employmentHistory[key].companyname}`;
            let roles = []
            for (var i = 0; i < this.employmentHistory[key].roles.length; i++) {
                roles.push(
                    <div key={i} className="role">
                        <div className="blackDotrole"></div>
                        <p>{this.employmentHistory[key].roles[i]}</p>
                    </div>
                )
            }
            return (
                <div key={key} >
                    <div className="jobtitlecompanyname-location">
                        <p>{jobtitlecompanyname}</p>
                        <p id="location">{this.employmentHistory[key].location}</p>
                    </div>
                    <p className="startend">{startend}</p>
                    {roles}
                </div>
            )
        });
    }
    render(){
        return (
            <div className="employmentHistory">
                {this.renderEmploymentHistory()}
            </div>
        );
    }
    
}

export default EmploymentHistory;