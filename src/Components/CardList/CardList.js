import React from 'react';
import Card from '../Card/Card';

const CardList = ({ data }) => {
  return (
    <div>
      {
        data.map((app, i) => {
        return (
          <Card
            key={data[i].id}
            id={data[i].id}
            name={data[i].name}
            icon={data[i].icon}
            background={data[i].background}
            appURL={data[i].appURL}
            playURL={data[i].playURL}
          />
        );
      })
    }
    </div>
  );
}

export default CardList;
