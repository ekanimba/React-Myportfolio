import React from 'react';
import './Info.css'
class Info extends React.Component {
    info = this.props.info;
    renderInfo(){
        return Object.keys(this.info).map(key => {
            return (
                <div key={key} className="infokey">
                    <h5>{this.info[key].header}</h5>
                    <p>{this.info[key].information}</p>
                </div>
            )
        });
    }
    render(){
        return (
            <div className="info">
                {this.renderInfo()}
            </div>
        );
    }
    
}

export default Info;