import React, { useState } from "react";
import MixTable from "./MixTable.js";
import { Mixes } from "../data/Mixes";
import { djMixes } from "../data/djMixes";
import SearchBar from "./SearchBar.js";
import "./Downloads.css";

const DownloadsPage = () => {
  const [filterText, setFilterText] = useState("");
  const [filterDjMixText, setFilterDjMixText] = useState("");

  function handleFilterTextInput(filterText) {
    setFilterText(filterText);
  }

  function handleDJFilterTextInput(filterText) {
    setFilterDjMixText(filterText);
  }

  return (
    <div className="Download-card">
      <h4 className="Download-card">Remix Downloads</h4>
      <SearchBar
        filterText={filterText}
        onFilterTextInput={handleFilterTextInput}
      />
      <MixTable mixes={Mixes} filterText={filterText} />

      <h4>DJ Mix Downloads</h4>
      <SearchBar
        filterText={filterDjMixText}
        onFilterTextInput={handleDJFilterTextInput}
      />
      <MixTable mixes={djMixes} filterText={filterDjMixText} />
    </div>
  );
};

export default DownloadsPage;
