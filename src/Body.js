import React, { Component } from 'react';
import './Body.css';
import { data } from './ApplictionData';
import CardList from './CardList';

class Body extends Component {
  render() {
    return(
      <div id="Body">
        <div className="Section">
          <h1>About</h1>
          <p>I'm an aspiring software engineer from Denmark, meaning I'm fluent in english and danish. I'm self-taught, but I am going to attend university starting the autumn of 2019. I have worked primarily with C# and Unity3D, where I have published multiple applications (listed below). The fact that I have worked with C# have given me a great basis for working in Java, with which I too have "dabbled".</p>
          <p>Furthermore I have a bit of experience with the web technologies: HTML, CSS and JavaScript. And with that some frameworks, such as React and Bootstrap. Beside that I also have an understanding of databases, primarily SQL databases and more specifically MySQL.</p>
        </div>
        <div className="Section">
          <h1>Applications</h1>
          <CardList data={data} />
        </div>
      </div>
    );
  }
}

export default Body;
