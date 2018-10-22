import React from 'react';
import './Card.css';

const Card = ({ id, name, icon, background }) => {
  var divStyle = {
    backgroundImage: `url(https://andiscle.sirv.com/Portfolio/${id}/${background})`
  }
  return(
    <div className="Card" style={divStyle}>
      <img alt='icon' src={`https://andiscle.sirv.com/Portfolio/${id}/${icon}?w=200&h=200`} width="200" height="200" />
      {/* <p>{name}</p> */}
    </div>
  );
}

export default Card;
