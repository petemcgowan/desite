import React from "react";
import { Link } from "react-router-dom";
import "./PagesList.css";

import {RoutesProps} from "../interfaces/RoutesInterfaces";


const PagesList = (props: RoutesProps) => {
  return (
    <div className="PagesList">
      <br />
      <div className="row">
        {props.pages.map((d) => (
          <div className="Pages col-lg-5 text-center" key={d.name}>
            <Link to={`/Pages/${d.name}`}>
              <img src={d.src} alt={d.name} />
              <h3 className="mt-3 underline">{d.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PagesList;
