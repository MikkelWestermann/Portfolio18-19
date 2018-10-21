import React from 'react';
import './Card.css';

const Card = ({ id, name, icon, background }) => {
  var divStyle = {
    backgroundImage: `url(https://andiscle.sirv.com/Portfolio/${id}/${background})`
  }
  return(
    <div className="Card" style={divStyle}>
      <img alt='icon' src={`https://andiscle.sirv.com/Portfolio/${id}/${icon}?w=150&h=150`} width="150" height="150" />
      {/* <p>{name}</p> */}
    </div>
  );
}

export default Card;
