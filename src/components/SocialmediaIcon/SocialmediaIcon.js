import React from 'react';
import './SocialmediaIcon.css';
import icon_github from './icon_github.svg';
import icon_instagram from './icon_instagram.svg';
import icon_linkedin from './icon_linkedin.svg';
import icon_twitter from './icon_twitter.svg';

class SocialmediaIcon extends React.Component {
    constructor(props){
        super(props);
        this.socialMediaIcon = [
            {
                iconsrc: icon_github,
                iconDirecturi: "https://github.com/ekanimba",
                iconalt: "Gitbub"
            },
            {
                iconsrc: icon_linkedin,
                iconDirecturi: "https://www.linkedin.com/in/erickanimba/",
                iconalt: "LinkedIn"
            },
            {
                iconsrc: icon_twitter,
                iconDirecturi: "https://twitter.com/EricKanimba",
                iconalt: "Twitter"
            },
            {
                iconsrc: icon_instagram,
                iconDirecturi: "https://www.instagram.com/kanimba_eric/",
                iconalt: "Instagram"
            }
        ]
    }
    directuri(link){
        console.log(link);
        window.open(link);
    }
    renderSocialMediaIcon(){
        return Object.keys(this.socialMediaIcon).map(socialMediaIcon => {
            //console.log(this.socialMediaIcon[socialMediaIcon]);
            return <img key={socialMediaIcon} src={this.socialMediaIcon[socialMediaIcon].iconsrc} alt={this.socialMediaIcon[socialMediaIcon].iconalt} onClick={ () => this.directuri(this.socialMediaIcon[socialMediaIcon].iconDirecturi) }></img>
        })
    }
    render(){
        return(
            <div className="SocialMediaIcon">
                {this.renderSocialMediaIcon()}
            </div>
        );
    }
}

export default SocialmediaIcon;