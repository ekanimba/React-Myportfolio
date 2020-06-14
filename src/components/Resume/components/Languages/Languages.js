import React from 'react';
import './Languages.css';


class Languages extends React.Component {

    languages = this.props.languages;

    renderLanguages(){
        return Object.keys(this.languages).map(language => {
            let levels = []
            for (var i = 0; i < 5; i++) {
                if(i < this.languages[language].level) {
                    levels.push(<div key={i} className="blackDot"></div>)
                } else {
                    levels.push(<div key={i} className="whiteDot"></div>)
                }
                
            }
            return (
                <div key={language} >
                    <p className="language">{this.languages[language].language}</p>
                    <div className="levels">{levels}</div>
                    
                </div>
            )
        });
    }
    
    render(){
        return (
            <div className="languages">
                {this.renderLanguages()}
            </div>
        );
    }
    
}

export default Languages;