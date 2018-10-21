import React, { Component } from 'react';
import './Body.css';
import Card from './Card';
import { data } from './ApplictionData';

class Body extends Component {
  render() {
    return(
      <div id="Body">
        <div className="Section">
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida ipsum tincidunt leo ornare blandit. Nulla facilisi. Praesent sollicitudin egestas tortor, id ornare odio blandit et. Vivamus purus eros, faucibus et suscipit nec, commodo vulputate mauris. Sed eu blandit metus, vitae maximus quam. Nam finibus nunc non augue ullamcorper, vitae posuere ligula faucibus. Nulla vulputate risus sed diam luctus porttitor. Sed sed rhoncus nisi. Integer luctus ante mi, eget aliquam enim accumsan non. Aenean maximus sagittis lorem eget auctor. Ut in molestie erat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida ipsum tincidunt leo ornare blandit. Nulla facilisi. Praesent sollicitudin egestas tortor, id ornare odio blandit et. Vivamus purus eros, faucibus et suscipit nec, commodo vulputate mauris. Sed eu blandit metus, vitae maximus quam. Nam finibus nunc non augue ullamcorper, vitae posuere ligula faucibus. Nulla vulputate risus sed diam luctus porttitor. Sed sed rhoncus nisi. Integer luctus ante mi, eget aliquam enim accumsan non. Aenean maximus sagittis lorem eget auctor. Ut in molestie erat.</p>
        </div>
        <div className="Section">
          <h1>Applications</h1>
          <Card id={data[0].id} name={data[0].name} icon={data[0].icon} background={data[0].background} />
        </div>
      </div>
    );
  }
}

export default Body;
