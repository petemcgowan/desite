import React, { Component } from "react";
import  "./Podcast.css";
import podcastImage from "./images//UndergroundHousePodcastv1G.jpg";


class Podcast extends Component {
  render() {
    return (
      <div className='Podcast' id='podcast'>

      <a href="https://podcasts.apple.com/lc/podcast/underground-house-funk-techno/id1445101714">
        <img src={podcastImage} alt="podcast" height="200" width="200"/>
      </a>
      <table align="left">
          <tr>
            <td>
              <a href="https://podcasts.apple.com/lc/podcast/underground-house-funk-techno/id1445101714"
                >Apple Podcasts</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.iheart.com/podcast/256-underground-house-funk-tec-31152322/"
                >iHeartRadio </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://play.pocketcasts.com/web/podcasts/share?id=c42542a0-d999-0136-3249-08b04944ede4"
                >Pocket Casts</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.stitcher.com/s?eid=57501102&autoplay=1/"
                >Stitcher </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://tun.in/pjf12">TuneIn</a>
            </td>
          </tr>
        </table>

      </div>
    );

  }
}
export default Podcast;
