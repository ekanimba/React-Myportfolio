import React from 'react';
import './Header.css';

class Header extends React.Component {
    render(){
        return (
        <div className="header"><h4>{this.props.header}</h4></div>
        );
    }   
}
export default Header;