import React, { Component } from 'react';
import './Body.css';
import { data } from './ApplictionData';
import CardList from './CardList';
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
        </div>
        <div className="Section">
          <h1>Applications</h1>
          <CardList data={data} />
        </div>
        <div className="Section">
          <h1>Contact</h1>
          <p>If you want to contact me, you can find me on these social media:</p>
          <li>
            <ul className="social" id="facebook"><FontAwesomeIcon size="4x" icon={['fab', 'facebook-square']}/></ul>
            <ul className="social" id="linkedin"><FontAwesomeIcon size="4x" icon={['fab', 'linkedin']}/></ul>
            <ul className="social" id="github"><FontAwesomeIcon size="4x" icon={['fab', 'github-square']}/></ul>
            <ul className="social" id="twitter"><FontAwesomeIcon size="4x" icon={['fab', 'twitter-square']}/></ul>
          </li>
        </div>
      </div>
    );
  }
}

export default Body;
