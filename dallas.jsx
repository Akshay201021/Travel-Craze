import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom'
import './dallas.css'
import './App.css'
function dallas(){
  const history=useHistory();
  return(
    <div className="dallas">
      <button type="button" onClick={()=>history.push("/")} className="button">Home</button>
      <h1 className="heading">Dallas</h1>
      <p className="info">Home of the Cowboys, Rangers, and the Stars. This city is sure to satisfy your entertainment and tourist expectations. Well what are you waiting for scroll below to find out more!</p>
      <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img src="https://dallasarboretum.imgix.net/wp-content/uploads/2023/06/13154510/Summer-at-the-Arboretum-6.jpg?fit=crop&crop=entropy,faces,center&q=70&auto=format&or=0&fm=jpeg&w=800&h=500" alt="Card" className="twoimg"/>
          <div className="card-body">
            <h5 className="card-title">Dallas Arboretum and Botanical Garden</h5>
            <p className="card-text">  The 66-acre Dallas Arboretum is one of the world’s premier gardens, and certainly one of the most colorful. Local residents have deemed this urban oasis to be the crowning jewel of Dallas. As one of the city’s top attractions, the Arboretum garners repeat visits from members, local visitors and out-of-town guests. Many praise the Garden for its beautiful vistas, colorful display gardens, and groves of pecan trees, magnolias, crape myrtles, cherry trees and azaleas. </p>
            <a href="https://www.dallasarboretum.org/" className="btn btn-primary">Visit this place</a>
          </div>
        </div>
      </div>
   
    
        <div className="col-md-4">
          <div className="card">
            <img src="https://www.tshaonline.org/images/handbook/entries/DD/dallas-museum.jpg" alt="Card" className="twoimg" />
            <div className="card-body">
              <h5 className="card-title">Dallas Museum of Art</h5>
              <p className="card-text">  Located in the nation’s largest arts district, the DMA is a catalyst for community creativity, engaging people of all ages and backgrounds with a diverse spectrum of programming, from exhibitions and lectures to concerts, literary events, and dramatic performances. Meet the people charged with leading our dynamic institution into the future. </p>
              <a href="https://dma.org/" className="btn btn-primary">Visit this place</a>
            </div>
          </div>
        </div>
      
      <div className="col-md-4">
          <div className="card">
            <img src="https://visit-dallas.imgix.net/images/general/skyline/Reunion-Tower-Exterior-Ball-shot.jpg?auto=compress%2Cformat&crop=focalpoint&fit=min&fp-x=0.5&fp-y=0.5&h=630&q=80&w=1200&s=efd89d1814ac051985d3d945fed9b58a" alt="Card" className="twoimg" />
            <div className="card-body">
              <h5 className="card-title">Reunion Tower</h5>
              <p className="card-text">As it is affectionately known by locals, “The Ball” has been a staple of the Dallas skyline since 1978. It’s 259 exterior LED lights can be seen for miles, but it’s what’s on the inside that counts. From 470 feet up you’ll experience breathtaking 360-degree panoramic views a free digital photo and an indoor/outdoor observation deck that lets you see for miles in any direction. Day or night, make the iconic Reunion Tower a must-see in Dallas.</p>
              <a href="https://reuniontower.com/" className="btn btn-primary">Visit this place</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      
  )
}
export default dallas