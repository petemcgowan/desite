import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

class Social extends Component {
  render() {
    //ReactDOM.render(<SocialIcon url="https://twitter.com/diplomaticenjoy" />, document.body);

    return (
      <div className='Social' id='social'>
        <SocialIcon url="https://www.instagram.com/diplomaticenjoy" />
        <SocialIcon url="https://open.spotify.com/artist/0hFzAYqKLJFEBp5jd8RhmK" />
        <SocialIcon url="https://www.soundcloud.com/diplomaticenjoy" />
        <SocialIcon url="https://www.youtube.com/channel/UCcMegCxCOkDyzWcgtzYUSGg" />
      </div>
    );

  }
}
export default Social;
