import React from 'react';
import './SmallCard.css';

const SmallCard = ({ title, strongText, tech, description, siteURL, category, hasStar }) => {
  return (
    <div className='SmallCard'>
      <img src={`https://andiscle.sirv.com/Portfolio/Websites/${ category }/${ title }_card_image.png`} alt='website'/>
      <div>
        <h3 className='title'>{ title } { hasStar && <span className='herokuStar'>*</span> }</h3>
        <div className='cardDescription'>
          <p><strong>Technologies:</strong></p>
          <p>{tech}</p>
          <p><strong>{ strongText }</strong></p>
          <p>{ description }</p>
        </div>
        <p><a href={ siteURL }>View Site</a></p>
      </div>
    </div>
  );
}

export default SmallCard;
