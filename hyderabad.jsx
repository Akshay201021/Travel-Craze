import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom'
import './hyderabad.css'
function hyderabad(){
  const history=useHistory();
  return(
    <div className="hyderabad">
      <button type="button" onClick={()=>history.push("/")} className="button">Home</button>
      <h1 className="headingHYD">Hyderabad</h1>
      <p className="infoHYD">Hyderabad is the capital of southern India's Telangana state. It is a major center for technology and a home to many upscale restaurants and shops. Its historic sites include Golconda Fort, which is a former diamond-trading center that was once the Qutb Shahi dynasty capital. </p>
      <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img src="https://i0.wp.com/indiacurrents.com/wp-content/uploads/2021/08/1599px-The_Charminar_on_a_cloudy_day.jpeg?fit=785%2C515&ssl=1" alt="Card" className="twoimg"/>
          <div className="card-body">
            <h5 className="card-title">Charminar</h5>
            <p className="card-text">The four pillars around Charminar represent the four caliphs. These pillars or minars are 48.7 meters high. These are four stories, with each floor divided by intricately carved rings that surround it. On the top floor of Chaminar there is a mosque which is believed to be the oldest mosque of Hyderabad city. There are 45 prayer spaces or musallah. Attached to these is the open space which can be used to accommodate more people on occasions like Friday prayers or festivals. </p>
            <a href="https://hyderabad.telangana.gov.in/tourist-place/charminar/" className="btn btn-primary">Visit this place</a>
          </div>
        </div>
      </div>


        <div className="col-md-4">
          <div className="card">
            <img src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20181121170741/Golconda-Fort.jpg" alt="Card" className="twoimg" />
            <div className="card-body">
              <h5 className="card-title">Golconda Fort</h5>
              <p className="card-text"> The fort was originally built by Kakatiya ruler Pratāparudra in the 11th century out of mud walls.[3] It was ceded to the Bahmani Kings by Deo Rai, Rajah of Warangal during the reign of Sultan Muhammad Shah (1358–1375 A.D.) of the Bahmani Sultanate.[3] </p>
              <a href="https://hyderabad.telangana.gov.in/tourist-place/golconda-fort/" className="btn btn-primary">Visit this place</a>
            </div>
          </div>
        </div>

      <div className="col-md-4">
          <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Birla_Mandir%2C_Hyderabad.png" alt="Card" className="twoimg" />
            <div className="card-body">
              <h5 className="card-title">Birla Mandir </h5>
              <p className="card-text">Birla Mandir is a Hindu temple, built on a 280 feet high hillock called Naubath Pahad on a 13 acres plot in Hyderabad, Telangana, India. The construction took 10 years and was opened in 1976 by Swami Ranganathananda of Ramakrishna Mission.
             </p>
              <a href="https://hyderabad.telangana.gov.in/tourist-place/birla-mandir/" className="btn btn-primary">Visit this place</a>
            </div>
          </div>
        </div>
      </div>
      </div>

  )
}
export default hyderabad