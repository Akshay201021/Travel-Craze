import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom'
import './delhi.css'
function delhi(){
  const history=useHistory();
  
  return(
    <div className="newdelhi">
      <button type="button" onClick={()=>history.push("/")} className="button">Home</button>
      <h1 className="headingND">New Delhi</h1>
      <p className="infoND">India's capital, and home of the India Gate. This place is filled with flavorful indian food, and attractions that you cannot miss! Scroll below and check out all the top 3 attractions. </p>
      <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/e0/7b/c2/picture-clicked-at-the.jpg" alt="Card" className="twoimg"/>
          <div className="card-body">
            <h5 className="card-title">The India Gate</h5>
            <p className="card-text"> At the centre of New Delhi stands the 42 m high India Gate, an "Arc-de-Triomphe" like archway in the middle of a crossroad. Almost similar to its French counterpart, it commemorates the 70,000 Indian soldiers who lost their lives fighting for the British Army during the World War I. The memorial bears the names of more than 13,516 British and Indian soldiers killed in the Northwestern Frontier in the Afghan war of 1919. </p>
            <a href="https://www.delhitourism.gov.in/delhitourism/tourist_place/india_gate.jsp" className="btn btn-primary">Visit this place</a>
          </div>
        </div>
      </div>


        <div className="col-md-4">
          <div className="card">
            <img src="https://cdn.britannica.com/20/189820-050-D650A54D/Red-Fort-Old-Delhi-India.jpg" alt="Card" className="twoimg" />
            <div className="card-body">
              <h5 className="card-title">Red Fort</h5>
              <p className="card-text">  The Red Fort Complex was built as the palace fort of Shahjahanabad – the new capital of the fifth Mughal Emperor of India, Shah Jahan. Named for its massive enclosing walls of red sandstone, it is adjacent to an older fort, the Salimgarh, built by Islam Shah Suri in 1546, with which it forms the Red Fort Complex. The private apartments consist of a row of pavilions connected by a continuous water channel, known as the Nahr-i-Behisht (Stream of Paradise) </p>
              <a href="https://dma.org/" className="btn btn-primary">Visit this place</a>
            </div>
          </div>
        </div>

      <div className="col-md-4">
          <div className="card">
            <img src="https://cdn.britannica.com/67/156667-050-62285333/Lotus-Temple-New-Delhi-India.jpg" alt="Card" className="twoimg" />
            <div className="card-body">
              <h5 className="card-title">Lotus Temple</h5>
              <p className="card-text">The structure is made up of pure white marble The architect Furiburz Sabha chose the lotus as the symbol common to Hinduism, Buddhism, Bhai TempleJainism and Islam. Adherents of any faith are free to visit the temple and pray or meditate.

              Around the blooming petals there are nine pools of water, which light up, in natural light. It looks spectacular at dusk when it is flood lit.</p>
              <a href="https://reuniontower.com/" className="btn btn-primary">Visit this place</a>
            </div>
          </div>
        </div>
      </div>
      </div>

  )
}
export default delhi