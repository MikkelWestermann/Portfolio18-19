import React from 'react';
import './Card.css';

import appstore from '../../appstore.svg';
import googleplay from '../../googleplay.png';

const Card = ({ id, name, icon, background, appURL, playURL }) => {
  var divStyle = {
    backgroundImage: `url(https://andiscle.sirv.com/Portfolio/${id}/${background}?w=1000&h=1000)`
  }
  return(
      <div className="Card" style={divStyle}>
        <img alt='icon' src={`https://andiscle.sirv.com/Portfolio/${id}/${icon}?w=200&h=200`} width="200" height="200" className='icon'/>
        <div className="download">
          <a href={ appURL }><img src={ appstore } alt='app store' className='storeLinkApple'/></a>
          <a href={ playURL }><img src={ googleplay } alt='google play' className='storeLinkGoogle'/></a>
        </div>
      </div>
  );
}

export default Card;
