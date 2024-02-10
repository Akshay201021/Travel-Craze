import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom'
import './sfo.css'
import'./button.css'
function SanFrancisco(){
  const history=useHistory();

  return(
    <div className="SFO">
      <button type="button" onClick={()=>history.push("/")} className="button">Home</button>
      <h1 className="headingSFO">San Francisco</h1>
      <p className="infoSFO">A popular tourist destination, San Francisco is known for its cool summers, fog, steep rolling hills, eclectic mix of architecture, and landmarks, including the Golden Gate Bridge, cable cars, the former Alcatraz Federal Penitentiary, Fisherman's Wharf, and its Chinatown district. </p>
      <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img src="https://cdn.britannica.com/95/94195-050-FCBF777E/Golden-Gate-Bridge-San-Francisco.jpg"/>
            <h5 className="card-title">Golden Gate Bridge</h5>
            <p className="card-text">A popular tourist destination, San Francisco is known for its cool summers, fog, steep rolling hills, eclectic mix of architecture, and landmarks, including the Golden Gate Bridge, cable cars, the former Alcatraz Federal Penitentiary, Fisherman's Wharf, and its Chinatown district. </p>
            <a href="https://www.goldengate.org/" className="btn btn-primary">Visit this place</a>
          </div>
        </div>
     


        <div className="col-md-4">
          <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Alcatraz_2021.jpg" alt="Card" className="twoimg" />
            <div className="card-body">
              <h5 className="card-title">Alcatraz Island</h5>
              <p className="card-text">Alcatraz Island is a small island 1.25 miles offshore from San Francisco, California, United States. The island was developed in the mid-19th century with facilities for a lighthouse, a military fortification, and a military prison.  </p>
              <a href="https://www.nps.gov/alca/index.htm" className="btn btn-primary">Visit this place</a>
            </div>
          </div>
        </div>

      <div className="col-md-4">
          <div className="card">
            <img src="https://www.sftravel.com/sites/default/files/styles/hero/public/2022-10/lombard-street-aerial.jpg.webp?itok=BqBM3IRW" alt="Card" className="twoimg" />
            <div className="card-body">
              <h5 className="card-title">Lombard Street </h5>
              <p className="card-text">Lombard Street is an east–west street in San Francisco, California that is famous for a steep, one-block section with eight hairpin turns. Stretching from The Presidio east to The Embarcadero, most of the street's western segment is a major thoroughfare designated as part of U.S. Route 101
             </p>
              <a href="https://www.sftravel.com/things-to-do/attractions/iconic-sf/lombard-street" className="btn btn-primary">Visit this place</a>
            </div>
          </div>
        </div>
    </div>
    </div>
  

  )
}
export default SanFrancisco