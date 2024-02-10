import './App.css'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
 import Dallas from './dallas.jsx'
 import NewDelhi from './delhi.jsx'
 import Hyderabad from './hyderabad.jsx'
import NewYork from './newyork.jsx'
import Dropdown from './dropdown.jsx'
import Home from './main.jsx'
import SanFrancisco from './sanfrancisco.jsx'

export default function App() {
  return (
    <div>
      
<Router> 

   <Dropdown/>
 <Switch>
  <Route exact path="/"><Home/></Route>
 <Route path="/dallas"><Dallas/>  </Route>
   <Route path="/delhi"><NewDelhi/>  </Route>
   <Route path="/hyderabad"><Hyderabad/></Route> 
   <Route path="/newyork"><NewYork/></Route>
   <Route path="/sanfrancisco"><SanFrancisco/></Route>

  
 </Switch>

 
 </Router>

       </div>
  )
}
