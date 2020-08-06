import React, { Component } from "react";
import Routes from "./Routes";
import { Route} from "react-router-dom";
import DownloadsPage from "./DownloadsPage";
import Navbar from "./Navbar";
import Social from "./Social";
import house from "./images//housev2girl-457hi.jpg";
import techno from "./images/techno-astro-400hi.jpg";
import funk from "./images/funk400hi.jpg";
import downloads from "./images/SushiDog400vhsfw.jpg";
import "./App.css";



/* follow button:  Is this just fucking needy?   Looks awkward in the table anyways.
          "https://open.spotify.com/follow/1/?uri=spotify:artist:0hFzAYqKLJFEBp5jd8RhmK&amp;size=detail&amp;theme=light&amp;show-count=0"
*/

class App extends Component {


  static defaultProps = {
    CONTACTS: [
      {name: 'BT Express', phone: 'Do It till youre satisfied (de remix)', email: 'http://bit.ly/2sWYWoJ'},
      {name: 'Mike James', phone: '555-777-888', email: 'mikejames@gmail.com'},
      {name: 'Tiffany Larson', phone: '555-222-111', email: 'tiffanylarson@gmail.com'},
      {name: 'Clark Thompson', phone: '555-444-333', email: 'clark123@gmail.com'},
      {name: 'Emma Page', phone: '555-444-333', email: 'emma1page@gmail.com'},
    ],
    downloadInfo: [ {
      name: "House",
    }],
    dogs: [
      {
        name: "House",
        ageIsIrrelevant: 4,
        src: house,
        facts: [
          {source:"https://open.spotify.com/embed?uri=spotify:user:1163531592:playlist:3F06NSn0Zf6tIIRcraeKe9&amp;size=detail&amp;theme=light&amp;show-count=1",  height:  220},
          {source:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/668714891&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",  height:  160},
          {source:"https://open.spotify.com/embed/track/1WXjNKjwp4iRKK0egpv7Rt",  height:  90},
          {source:"https://open.spotify.com/embed/album/7zFl3kgDR4aQ8WDhvX8eWk",  height:  160},
          {source:"https://open.spotify.com/embed/track/3rihedoymkkfQpa1J6vE0Q",  height:  90}
        ]
      },
      {
        name: "Techno",
        ageIsIrrelevant: 3,
        src: techno,
        facts: [
          {source:"https://open.spotify.com/embed?uri=spotify:user:1163531592:playlist:6iqxF99IunM1sOPdqvQ3Q7",  height:  220},
          {source:"https://www.youtube.com/embed/videoseries?list=PLMniNzct9KeZsJpQoF_pdXwB0NQsF94Sd",  height:  160},
          {source:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/697938109&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true",  height:  160},
          {source:"https://open.spotify.com/embed/album/7zFl3kgDR4aQ8WDhvX8eWk",  height:  160},
          {source:"https://www.youtube.com/embed/BhlDy4pU8mI?rel=0",  height:  160}
        ]
      },
      {
        name: "Funk",
        ageIsIrrelevant: 4,
        src: funk,
        facts: [
          {source:"https://open.spotify.com/embed/track/0EmuEwPWgmhI5OXIQThH3t",  height:  90},
          {source:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/720023266&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",  height:  160},
          {source:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/723474691&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",  height:  160},
          {source:"https://open.spotify.com/embed/user/1163531592/playlist/7CLPfDOCjgWcwo9g1tGPQo",  height:  220},
          {source:"https://www.youtube.com/embed/stoRHlAhETs",  height:  160},
          {source:"https://www.youtube.com/embed/videoseries?list=PLMniNzct9Kea6tS0LvYMAk_iw4IvrPH30",  height:  160},
          {source:"https://www.youtube.com/embed/DG5GnCwS_EA?rel=0",  height:  160},
          {source:"https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fdiplomaticenjoy%2Funderground-funk-blackbyrds-singing%2F",  height:  120}
        ]
      },
      {
        name: "Downloads",
        ageIsIrrelevant: 4,
        src: downloads,
        facts: [
          {source:"https://open.spotify.com/embed/track/0EmuEwPWgmhI5OXIQThH3t",  height:  90},
          {source:"https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fdiplomaticenjoy%2Funderground-funk-blackbyrds-singing%2F",  height:  120},
          {source:<DownloadsPage />,  height:  160}


        ]
      }
    ]
  };


  render() {
    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <div className='container'>
        <Routes dogs={this.props.dogs} />

        <Social />
        <DownloadsPage />
        </div>
      </div>
    );
  }
}

export default App;
