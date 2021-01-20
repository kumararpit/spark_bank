import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar.Component';
import Adduser from './Components/Adduser.Component';
import Home from './Components/Home.Component';
import Make_Transaction from './Components/Make_Transaction.Component';
import Tr_History from './Components/Tr_History.Component';
import Allusers from './Components/Users.Component';
function App() {
  return (
    <Router>
    <div className="Container">
     <Navbar />
     <br/>
     <Route path="/" exact component={Home} />
     <Route path="/Add"  component={Adduser} />
     <Route path="/Transaction"  component={Make_Transaction} />
     <Route path="/History"  component={Tr_History} />
     <Route path="/Allusers"  component={Allusers} />
    </div>
    </Router>
    
  );
}

export default App;
