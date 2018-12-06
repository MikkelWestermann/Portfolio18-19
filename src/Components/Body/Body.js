import React, { Component } from 'react';
import './Body.css';
import { data } from '../../ApplictionData';
import { courseData } from '../SmallCard/CourseWebsiteData';
import CardList from '../CardList/CardList';
import CourseWebsiteList from '../CardList/CourseWebsiteList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

class Body extends Component {
  render() {
    return(
      <div id="Body">
        <div className="Section">
          <h1>About</h1>
          <p>I'm an aspiring software engineer from Denmark, which means I'm fluent in english and danish. I'm self-taught, but I am going to attend university starting the autumn of 2019. I have worked primarily with C# and Unity3D, where I have published multiple applications on both Apple App Store and Google Play (listed below).</p>
          <p>Although my experience primarily lies in in the Unity environment, I also have a strong interest in the web technologies; HTML, CSS and JavaScript. And with that, awesome frameworks like React.</p>
          <p>I have also tried working a bit with databases, mainly MySQL. And I've played around with Java, which is quite a lot like C#...</p>
          <p>I also have a bit of experience with Photoshop, given that I have made all of the "art" for the applications listed below</p>
        </div>
        <div className="Section">
          <h1>Websites</h1>
          <h2>Courses</h2>
          <p>Websites I have worked on as part of online courses</p>
          <div className='smallCardContainer'>
            <CourseWebsiteList courseData={ courseData }/>
          </div>
        </div>
        <div className="Section">
          <h1>Applications</h1>
          <CardList data={data} />
        </div>
        <div className="Section">
          <h1>Contact</h1>
          <p>If you want to contact me, you can email me @:</p>
          <a href='mailto:mikkel.westermann.98@gmail.com' id='emailContact'>mikkel.westermann.98@gmail.com</a>
          <p>or find me on these social media:</p>
          <ul>
            <li className="social"><a id="facebook" href='https://www.facebook.com/mikkel.westermann.1'><FontAwesomeIcon size="4x" icon={['fab', 'facebook-square']}/></a></li>
            <li className="social"><a id="linkedin" href='https://www.linkedin.com/in/mikkel-westermann-053198164/'><FontAwesomeIcon size="4x" icon={['fab', 'linkedin']}/></a></li>
            <li className="social"><a id="github" href='https://github.com/MikkelWestermann'><FontAwesomeIcon size="4x" icon={['fab', 'github-square']}/></a></li>
            <li className="social"><a id="twitter" href='https://twitter.com/MTWestermann?lang=en'><FontAwesomeIcon size="4x" icon={['fab', 'twitter-square']}/></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Body;
