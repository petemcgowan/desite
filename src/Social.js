import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
import "./Social.css";

class Social extends Component {
  render() {
    //ReactDOM.render(<SocialIcon url="https://twitter.com/diplomaticenjoy" />, document.body);

    return (
      <div className='Social' >
        <SocialIcon className='Social' network="instagram" bgColor="#E1306C" url="https://www.instagram.com/diplomaticenjoy" />
        <SocialIcon className='Social' url="https://open.spotify.com/artist/0hFzAYqKLJFEBp5jd8RhmK" />
        <SocialIcon className='Social' url="https://www.soundcloud.com/diplomaticenjoy" />
        <SocialIcon className='Social' url="https://www.youtube.com/channel/UCcMegCxCOkDyzWcgtzYUSGg" />
      </div>
    );

  }
}
export default Social;
