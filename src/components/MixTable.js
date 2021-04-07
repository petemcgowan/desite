import React from "react";

// Note that MixRow props isn't MixTable props
const MixRow = (props) => {
  return (
    <tr>
      <td key={props.mix.artist + props.mix.song}>{props.mix.artist}</td>
      <td key={props.mix.song}>{props.mix.song}</td>
      <td key={props.mix.link}>
        <a href={props.mix.link}>Download</a>
      </td>
    </tr>
  );
};

const MixTable = (props) => {
  var rows = [];
  props.mixes.forEach((mix) => {
    if (
      mix.artist.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1 &&
      mix.song.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1
    ) {
      return;
    }
    rows.push(<MixRow mix={mix} />);
  });

  return (
    <table className="table">
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
};

export default MixTable;
