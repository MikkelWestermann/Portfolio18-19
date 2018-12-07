import React from 'react';
import SmallCard from '../SmallCard/SmallCard';

const CourseWebsiteList = ({ courseData }) => {
  return (
    <div className='smallCardContainer' >
      {
        courseData.map((app, i) => {
        return (
          <SmallCard
            key={courseData[i].title}
            title={courseData[i].title}
            strongText='Course:'
            description={courseData[i].from}
            siteURL={courseData[i].siteURL}
            category={courseData[i].category}
          />
        );
      })
    }
    </div>
  );
}

export default CourseWebsiteList
