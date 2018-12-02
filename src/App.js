import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Route1 from './Route1'
import Route2 from './Route2'
import Route3 from './Route3'
import Button from './Button'


const App = (props) => (
  <div>
    <Router>
      <div>
        <Route path="/" exact={true} component={()=>
        <Button label="NIC!"/>}/>
        <Route path="/route-1" component={Route1}/>
        <Route path="/route-2" component={Route2}/>
        <Route path="/route-3" component={Route3}/>
      </div>
    </Router>
  </div>
);

export default App;
