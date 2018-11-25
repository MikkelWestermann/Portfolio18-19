import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons'

const Card = ({ id, name, icon, background, shade }) => {
  var divStyle = {
    backgroundImage: `url(https://andiscle.sirv.com/Portfolio/${id}/${background}?w=1500&h=1500)`
  }
  return(
      <div className="Card" style={divStyle}>
        <div className="forground">
          <img alt='icon' src={`https://andiscle.sirv.com/Portfolio/${id}/${icon}?w=200&h=200`} width="200" height="200" />
          <div className="download">
            <a href="./"><FontAwesomeIcon size="4x" icon={['fab', 'google-play']}/></a>
            <a href="./"><FontAwesomeIcon size="4x" icon={['fab', 'app-store']}/></a>
          </div>
        </div>
      </div>
  );
}

export default Card;
