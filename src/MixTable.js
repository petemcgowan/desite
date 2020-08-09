import React from "react";

/*  So a row is basically an iFrame, or two iFrames  (it depends on the styling which you can figure out later on).  For now, create one.      */

class MixRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.mix.artist}</td>
        <td>{this.props.mix.song}</td>
        <a href={this.props.mix.link}><td>Download</td></a>
      </tr>
    );
  }
}

class MixTable extends React.Component {
  render() {
    var rows = [];
    this.props.mixes.forEach((mix) => {

      if ((mix.artist.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) &&
        (mix.song.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1)) {
        return;
      }
      rows.push(<MixRow mix={mix} />);
    });
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Artist</th>
            <th>Track</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default MixTable;
