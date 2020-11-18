import React from "react";
import MixTable from './MixTable.js';
import SearchBar from './SearchBar.js';
import "./Downloads.css";

class DownloadsPage extends React.Component {

  static defaultProps = {
    mixes: [
      {artist: 'Missy Elliott', song: 'Ultrafields House (rmx)', link: 'https://bit.ly/32X0kHg'},
      {artist: 'BT Express', song: 'Do It till youre satisfied (rmx)', link: 'http://bit.ly/2sWYWoJ'},
      {artist: 'The Meters', song: 'Just Kissed My Baby (rmx)', link: 'http://bit.ly/2Pr2rvf'},
      {artist: 'Midnight Movers', song: ' Party (rmx)', link: 'http://bit.ly/2PmztN6'},
      {artist: 'DJ Shadow', song: 'In Flux (edit)', link: 'http://bit.ly/2PpOdux'},
      {artist: 'Public Enemy', song: 'Power To the People (rmx)', link: 'http://bit.ly/2P1YM81'},
      {artist: 'Max Graef', song: 'Jazz 104 (edit)', link: 'http://bit.ly/2YrYniw'},
      {artist: 'Sabres of Paradise', song: 'Bubble and Slide (edit)', link: 'http://bit.ly/2LBxDad'},

      {artist: 'The Everyday People', song: 'Funky Generation (rmx)', link: 'http://bit.ly/2ksxxqX'},
      {artist: 'Ramsey Lewis', song: 'Sun Goddess (rmx)', link: 'http://bit.ly/2J6xESX'},
      {artist: 'James Brown', song: 'Mind Power (edit)', link: 'http://bit.ly/2Ir71Zr'},
      {artist: 'James Brown', song: 'Mind Power Interlude (rmx)', link: 'http://bit.ly/2VXL07O'},

      {artist: 'Sir Joe Quarterman, Free Soul', song: 'How High (rmx)', link: 'http://bit.ly/2TEBULA'},
      {artist: 'The Blackbyrds', song: 'Do It Fluid (rmx)', link: 'http://bit.ly/2GK6JN1'},
      {artist: 'Hamilton Bohannon', song: 'Red Bone (edit)', link: 'http://bit.ly/2TVoTx6'},
      {artist: 'William DeVaughn (feat Gil Scott Heron)', song: 'Be Thankful For What You Got (edit)', link: 'http://bit.ly/2AlfszM'},
    ],
    djMixes: [
      {artist: 'Underground House', song: 'Deep House to Techno Tinged', link: 'https://dts.podtrac.com/redirect.mp3/https://undergroundpodcast.s3.us-east-2.amazonaws.com/192/UHTF-01-Underground-House-Classics_192_imp.mp3'},
      {artist: 'Underground Funk', song: '70s Style, Breaks Vibe', link: 'https://dts.podtrac.com/redirect.mp3/https://undergroundpodcast.s3.us-east-2.amazonaws.com/192/UHTF-02-Underground-Funk-Blackbyrds-Singing_improved_192.mp3'},
      {artist: 'Underground House', song: 'Beach Party, Summer Flings, House-capades', link: 'https://dts.podtrac.com/redirect.mp3/https://undergroundpodcast.s3.us-east-2.amazonaws.com/192/UHTF_03_-_Beach_party_Summer_fling_Underground_House_capades_improved_192.mp3'},
      {artist: 'Underground Techno vs House', song: 'All Over The Shop (Acid n Dub)', link: 'https://dts.podtrac.com/redirect.mp3/https://undergroundpodcast.s3.us-east-2.amazonaws.com/192/UHTF_04_-_All_Over_The_Shop_Underground_Techno_improved_192.mp3'},

      {artist: 'Underground Funk', song: 'Stones Throw, 70s Breaks, Tape Style Beats', link: 'https://dts.podtrac.com/redirect.mp3/https://undergroundpodcast.s3.us-east-2.amazonaws.com/192/UHFT-05-Stones_Throw_70s_Breaks_Dilla_Tape_Style_Beats_Underground_Funk_Improved_192.mp3'},
      {artist: 'Underground Techno', song: 'european, uk, classics, warehouse', link: 'https://dts.podtrac.com/redirect.mp3/https://undergroundpodcast.s3.us-east-2.amazonaws.com/192/UHTF_06_Underground_Techno_European_UK_Classics_Warehouse_improved_192.mp3'},
      {artist: 'Underground House', song: 'Deep, feels, electronic Soul', link: 'https://dts.podtrac.com/redirect.mp3/https://https://undergroundpodcast.s3.us-east-2.amazonaws.com/192/UHTF_07_Underground_House_Deep_feels_electronic_Soul_160.mp3'},
      {artist: 'Underground Funk', song: 'Afro Chill Vibes, Hip hop brainfeeder Crates', link: 'https://dts.podtrac.com/redirect.mp3/https://undergroundpodcast.s3.us-east-2.amazonaws.com/192/UHFT-08-Afro_Chill_Vibes_Hip_hop_BrainFeeder_Crates_Underground_Funk.mp3'},

      {artist: 'Underground House', song: 'Disco Social Clubbin Dirt Crew', link: 'https://dts.podtrac.com/redirect.mp3/https://undergroundpodcast.s3.us-east-2.amazonaws.com/192/UHFT-09-Disco_Social_Clubbin_Dirt_Crew_Underground_House_EP09.mp3'},

      {artist: 'Underground Techno', song: 'Deep Classics To Cutting Edge - Pure Techno Underground', link: 'https://dts.podtrac.com/redirect.mp3/electriccolour.club/mp3/PTU-01-Deep_Classics_To_Cutting_Edge_Pure_Techno_EP01.mp3'},
    ]
  }

  constructor(props) {
    super(props);
    // FilterableMixTable is the owner of the state as the filterText is needed in both nodes (searchbar and table) that are below in the hierarchy tree.
    this.state = {
      filterText: ''
    };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);

  }

  handleFilterTextInput(filterText) {
    //Call to setState to update the UI
    this.setState({
      filterText: filterText
    });
    //React knows the state has changed, and calls render() method again to learn what should be on the screen
  }


  render() {
    return (
      <div className='Download-card'>
        <h4 className='Download-card'>Remix Downloads</h4>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <MixTable
          mixes={this.props.mixes}
          filterText={this.state.filterText}
        />
        <h4>DJ Mix Downloads</h4>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <MixTable
          mixes={this.props.djMixes}
          filterText={this.state.filterText}
        />

      </div>
    );
  }
}

export default DownloadsPage;
