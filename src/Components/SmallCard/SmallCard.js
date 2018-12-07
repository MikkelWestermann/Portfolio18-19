import React from 'react';
import './SmallCard.css';

const SmallCard = ({ title, strongText, description, siteURL, category }) => {
  return (
    <div className='SmallCard'>
      <img src={`https://andiscle.sirv.com/Portfolio/Websites/${ category }/${ title }_card_image.png`} alt='website'/>
      <div>
        <h3>{ title }</h3>
        <div className='cardDescription'>
          <p><strong>{ strongText }</strong></p>
          <p>{ description }</p>
        </div>
        <p><a href={ siteURL }>View Site</a></p>
      </div>
    </div>
  );
}

export default SmallCard;
