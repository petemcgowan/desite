import React from "react";
import { Link } from "react-router-dom";
import "./PageDetails.css";
import Podcast from "./Podcast";
import DownloadsPage from "./DownloadsPage";
import { podcasts } from "../data/podcasts";
import {PagesType, FactsType} from "../interfaces/RoutesInterfaces";
import {PodcastType} from "../interfaces/PodcastInterfaces";


 interface PageDetailsProps {
  pages: PagesType[];
  Page: PagesType;
}

const PageDetails = (props: PageDetailsProps) => {
  let { Page } = props;
  // page is the page details to render e.g. house or pages[0]
  console.log("podcasts:" + JSON.stringify(podcasts));
  let podcastInfo:PodcastType = podcasts[0]; // default podcast is house
  if (Page.techno) { // what podcast should be shown
    podcastInfo = podcasts[1];
    console.log("podcasts[1]:" + JSON.stringify(podcasts[1]));
  }

  return (
    <div className="PageDetails row justify-content-center mt-5 ">
      <div className="col-11 col-lg-10">
        <div className="PageDetails-card card">
          <div className="card-body">
            <h2 className="card-title">{Page.name}</h2>
          </div>
          <ul className="list-group list-group-flush">
            {Page.facts.map((fact:FactsType, i:number) => (
              <li className="list-group-item" key={i}>
                <iframe
                  src={fact.source}
                  width="100%"
                  height={fact.height}
                  title={fact.name}
                  name={fact.name}
                  // frameborder="0"
                  // allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </li>
            ))}
          </ul>
          <div className="Downloads">
            {Page.remixDownloads ? <DownloadsPage /> : ""}
          </div>
          <div className="Podcast">{<Podcast podcastInfo={podcastInfo}  />}</div>
          {/* <div className="Podcast">{Page.techno && <PodcastTechno />}</div> */}
          <div className="card-body">
            <Link to="/Pages" className="btn btn-info">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
