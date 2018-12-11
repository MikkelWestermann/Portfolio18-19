import React from 'react';
import SmallCard from '../SmallCard/SmallCard';

const PersonalProjectsList = ({ data, strongText }) => {
  return (
    <div className='smallCardContainer' >
      {
        data.map((app, i) => {
        return (
          <SmallCard
            key={data[i].title}
            title={data[i].title}
            tech={data[i].tech}
            strongText={strongText}
            description={data[i].description}
            siteURL={data[i].siteURL}
            category={data[i].category}
            hasStar={data[i].hasStar}
          />
        );
      })
    }
    </div>
  );
}

export default PersonalProjectsList
