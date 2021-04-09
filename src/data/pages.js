// front page image imports
import house from "../images/Housev4-(fish-eye,_noTitle500x500).jpg";
import techno from "../images/ECPodCrowdControlv2500x500.jpg";
import funk from "../images/funk400hi.jpg";
import downloads from "../images/SushiDog400vhsfw.jpg";

export const pages = [
  {
    name: "House",
    ageIsIrrelevant: 4,
    src: house,
    remixDownloads: false,
    djMixDownloads: false,
    techno: false,
    facts: [
      {
        source:
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/991563850&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        name: "CantDieSoul",
        height: 220,
      },

      {
        source:
          "https://open.spotify.com/embed?uri=spotify:user:1163531592:playlist:3F06NSn0Zf6tIIRcraeKe9&amp;size=detail&amp;theme=light&amp;show-count=1",
        name: "name",
        height: 220,
      },

      {
        source: "https://www.youtube.com/embed/yYHYUDogBJw",
        name: "name",
        height: 220,
      },

      {
        source:
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/923486665&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        name: "UltrafieldsMissy",
        height: 220,
      },

      {
        source:
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/668714891&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        name: "name",
        height: 160,
      },

      {
        source: "https://open.spotify.com/embed/track/1WXjNKjwp4iRKK0egpv7Rt",
        name: "name",
        height: 80,
      },

      //          {source:"https://open.spotify.com/embed/album/7zFl3kgDR4aQ8WDhvX8eWk", name:"name", height:  160},
      {
        source: "https://open.spotify.com/embed/track/3rihedoymkkfQpa1J6vE0Q",
        name: "name",
        height: 80,
      },
    ],
  },
  {
    name: "Techno",
    ageIsIrrelevant: 3,
    src: techno,
    remixDownloads: false,
    djMixDownloads: false,
    techno: true,
    facts: [
      {
        source:
          "https://open.spotify.com/embed?uri=spotify:user:1163531592:playlist:6iqxF99IunM1sOPdqvQ3Q7",
        name: "name",
        height: 220,
      },

      {
        source: "https://www.youtube.com/embed/lrjru5USh7Y",
        name: "name",
        height: 300,
      },

      {
        source:
          "https://www.youtube.com/embed/videoseries?list=PLMniNzct9KeZsJpQoF_pdXwB0NQsF94Sd",
        name: "name",
        height: 220,
      },

      {
        source:
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/697938109&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        name: "name",
        height: 160,
      },
    ],
  },
  {
    name: "DJ Downloads",
    ageIsIrrelevant: 4,
    src: downloads,
    remixDownloads: true,
    djMixDownloads: true,
    techno: false,
    facts: [],
  },
  {
    name: "Funk",
    ageIsIrrelevant: 4,
    src: funk,
    remixDownloads: false,
    djMixDownloads: false,
    techno: false,
    facts: [
      {
        source:
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/720023266&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        name: "name",
        height: 160,
      },

      {
        source:
          "https://open.spotify.com/embed/playlist/7CLPfDOCjgWcwo9g1tGPQo",
        name: "name",
        height: 220,
      },

      {
        source:
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/723474691&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        name: "name",
        height: 160,
      },

      {
        source: "https://open.spotify.com/embed/track/0EmuEwPWgmhI5OXIQThH3t",
        name: "name",
        height: 90,
      },

      {
        source:
          "https://www.youtube.com/embed/videoseries?list=PLMniNzct9Kea6tS0LvYMAk_iw4IvrPH30",
        name: "name",
        height: 160,
      },

      {
        source: "https://www.youtube.com/embed/stoRHlAhETs",
        name: "name",
        height: 160,
      },

      //          {source:"https://www.youtube.com/embed/DG5GnCwS_EA?rel=0", name:"name", height:  160},
      {
        source:
          "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fdiplomaticenjoy%2Funderground-funk-blackbyrds-singing%2F",
        name: "name",
        height: 120,
      },
    ],
  },
];
