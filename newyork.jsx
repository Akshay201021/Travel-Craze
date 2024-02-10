import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './newyork.css'
function newyork(){
  return(
    <div className="newyork">
      <button type="button" onClick={()=>history.push("/")} className="button">Home</button>
      <h1 className="headingNYC">New York</h1>
      <p className="infoNYC">New York is composed of five boroughs – Brooklyn, the Bronx, Manhattan, Queens and Staten Island - is home to 8.4 million people who speak more than 200 languages, hail from every corner of the globe, and, together, are the heart and soul of the most dynamic city in the world. </p>
      <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img src="https://cdn.thecollector.com/wp-content/uploads/2022/04/central-park-aerial-view-greensward-plan.jpg?width -body"> </img>
            <h5 className="card-title">Central Park</h5>
            <p className="card-text">Central Park is an urban park between the Upper West Side and Upper East Side neighborhoods of Manhattan in New York City that was the first landscaped park in the United States. It is the fifth-largest park in the city, containing 843 acres (341 ha), and the most visited urban park in the United States, with an estimated 42 million visitors annually as of 2016. </p>
            <a href="https://www.centralparknyc.org/">Visit this place</a>
          </div>
        </div>
     


        <div className="col-md-4">
          <div className="card">
            <img src="https://i.natgeofe.com/k/611a7aa1-57b3-4884-a2f6-2e0857c02257/united-states-statue-of-liberty-vertical.jpg?w=1084.125&h=1517.25" alt="Card" className="twoimg" />
            <div className="card-body">
              <h5 className="card-title">Statue of Liberty </h5>
              <p className="card-text">The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States. The copper statue, a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel.  </p>
              <a href="https://www.nps.gov/stli/planyourvisit/index.htm" className="btn btn-primary">Visit this place</a>
            </div>
          </div>
        </div>

      <div className="col-md-4">
          <div className="card">
            <img src="https://travel.usnews.com/images/Times_Square_Getty.jpg" alt="Card" className="twoimg" />
            <div className="card-body">
              <h5 className="card-title">Times Square </h5>
              <p className="card-text">Times Square is a major commercial intersection, tourist destination, entertainment hub, and neighborhood in Midtown Manhattan, New York City, United States. It is formed by the junction of Broadway, Seventh Avenue, and 42nd Street
             </p>
              <a href="https://www.timessquarenyc.org/" className="btn btn-primary">Visit this place</a>
            </div>
          </div>
        </div>
      </div>
      
       </div>
  )
}
export default newyork