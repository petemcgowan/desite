import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PageDetails.css";
import Podcast from "./Podcast.js";
import DownloadsPage from "./DownloadsPage";

class PageDetails extends Component {
  render() {
    let { Page } = this.props;

    return (
      <div className='PageDetails row justify-content-center mt-5 '>
        <div className='col-11 col-lg-5'>
          <div className='PageDetails-card card'>
            <div className='card-body'>
              <h2 className='card-title'>{Page.name}</h2>
            </div>
            <ul className='list-group list-group-flush'>
              {Page.facts.map((fact, i) => (
                <li className='list-group-item' key={i}>
              <iframe src={fact.source} width="100%" height={fact.height} title={fact.name} name={fact.name} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </li>
              ))}
            </ul>
            <div className='Downloads'>
              {Page.remixDownloads ? <DownloadsPage /> : ''}
            </div>
            <div className='Podcast'>
              <Podcast />
            </div>
            <div className='card-body'>
              <Link to='/Pages' className='btn btn-info'>
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageDetails;
