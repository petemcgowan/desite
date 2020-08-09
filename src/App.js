import React, { Component } from "react";
import Routes from "./Routes";
import Navbar from "./Navbar";
import Social from "./Social";
import house from "./images//housev2girl-457hi.jpg";
import techno from "./images/techno-astro-400hi.jpg";
import funk from "./images/funk400hi.jpg";
import downloads from "./images/SushiDog400vhsfw.jpg";
import "./App.css";


class App extends Component {

  static defaultProps = {
    downloadInfo: [ {
      name: "House",
    }],
    pages: [
      {
        name: "House",
        ageIsIrrelevant: 4,
        src: house,
        remixDownloads: false,
        djMixDownloads: false,
        facts: [
          {source:"https://open.spotify.com/embed?uri=spotify:user:1163531592:playlist:3F06NSn0Zf6tIIRcraeKe9&amp;size=detail&amp;theme=light&amp;show-count=1", name:"name", height:  220},
          {source:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/668714891&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", name:"name", height:  160},
          {source:"https://open.spotify.com/embed/track/1WXjNKjwp4iRKK0egpv7Rt", name:"name", height:  90},
          {source:"https://open.spotify.com/embed/album/7zFl3kgDR4aQ8WDhvX8eWk", name:"name", height:  160},
          {source:"https://open.spotify.com/embed/track/3rihedoymkkfQpa1J6vE0Q", name:"name", height:  90}
        ]
      },
      {
        name: "Techno",
        ageIsIrrelevant: 3,
        src: techno,
        remixDownloads: false,
        djMixDownloads: false,
        facts: [
          {source:"https://open.spotify.com/embed?uri=spotify:user:1163531592:playlist:6iqxF99IunM1sOPdqvQ3Q7",  name:"name", height:  220},
          {source:"https://www.youtube.com/embed/videoseries?list=PLMniNzct9KeZsJpQoF_pdXwB0NQsF94Sd",  name:"name", height:  160},
          {source:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/697938109&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true", name:"name", height:  160},
          {source:"https://open.spotify.com/embed/album/7zFl3kgDR4aQ8WDhvX8eWk", name:"name", height:  160},
          {source:"https://www.youtube.com/embed/BhlDy4pU8mI?rel=0", name:"name", height:  160}
        ]
      },
      {
        name: "Funk",
        ageIsIrrelevant: 4,
        src: funk,
        remixDownloads: false,
        djMixDownloads: false,
        facts: [
          {source:"https://open.spotify.com/embed/track/0EmuEwPWgmhI5OXIQThH3t", name:"name", height:  90},
          {source:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/720023266&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", name:"name", height:  160},
          {source:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/723474691&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", name:"name", height:  160},
          {source:"https://open.spotify.com/embed/user/1163531592/playlist/7CLPfDOCjgWcwo9g1tGPQo",  name:"name", height:  220},
          {source:"https://www.youtube.com/embed/stoRHlAhETs", name:"name", height:  160},
          {source:"https://www.youtube.com/embed/videoseries?list=PLMniNzct9Kea6tS0LvYMAk_iw4IvrPH30",  name:"name", height:  160},
          {source:"https://www.youtube.com/embed/DG5GnCwS_EA?rel=0", name:"name", height:  160},
          {source:"https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fdiplomaticenjoy%2Funderground-funk-blackbyrds-singing%2F", name:"name", height:  120}
        ]
      },
      {
        name: "Downloads",
        ageIsIrrelevant: 4,
        src: downloads,
        remixDownloads: true,
        djMixDownloads: true,
        facts: [
        ]
      }
    ]
  };


  render() {
    return (
      <div>
        <Navbar pages={this.props.pages} />
        <div className='container'>
          <Routes pages={this.props.pages} />
          <Social />
        </div>
      </div>
    );
  }
}

export default App;
