import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogDetails.css";
import Podcast from "./Podcast.js";

class DogDetails extends Component {
  render() {
    let { dog } = this.props;
    return (
      <div className='DogDetails row justify-content-center mt-5'>
        <div className='col-11 col-lg-5'>
          <div className='DogDetails-card card'>
            <div className='card-body'>
              <h2 className='card-title'>{dog.name}</h2>
              <h4 className='card-subtitle text-muted'>description  </h4>
            </div>
            <ul className='list-group list-group-flush'>
              {dog.facts.map((fact, i) => (
                <li className='list-group-item' key={i}>
              <iframe src={fact.source} width="100%" height={fact.height} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </li>
              ))}
            </ul>
            <div className='Podcast'>
              <Podcast />
            </div>
            <div className='card-body'>
              <Link to='/dogs' className='btn btn-info'>
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default DogDetails;
