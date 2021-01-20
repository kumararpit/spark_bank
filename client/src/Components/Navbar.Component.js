
import React , { Component } from 'react';
import{Link} from 'react-router-dom';

class Navbar extends Component
{
    render()
    {
        return(
 <div>      
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <Link to="/" className="navbar-brand" href="#"> Spark Bank</Link>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                  </li>
               <li className="nav-item">
              <Link to="/Add" className="nav-link">Add User</Link>
              </li>
              <li className="nav-item">
              <Link to="/Transaction" className="nav-link ">Transaction</Link>
              </li>
              <li className="nav-item">
              <Link to="/History" className="nav-link ">History</Link>
              </li>
           </ul>
           </div>
       </nav>
    </div>
        );
    }
}
export default Navbar;