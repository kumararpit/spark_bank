import React , { Component } from 'react';
import{Link} from 'react-router-dom';
import image from '../images/bank.png';
import allusers from '../images/allusers.png';
import passbook from '../images/history.png';
import transfer from '../images/transfer.png';
class Home extends Component
{
  render()
  {
      return(
        <div>
            <div className="dashboard">
                <div>
                <h1>Spark Bank</h1>
                <h4>A Spark foundation initiative</h4>
                </div>
               <div className="bank_png">
               <img src={image} alt="Saprk Bank"></img>
               </div> 
            </div>
             <div className="last_item">
             <div className="history">
                 <div className="ima">
                   <img src={allusers} alt="allusers"></img>
                 </div>
             <Link to="/Allusers"><button type="button"  className="btn btn-primary">Users</button></Link>
             </div>
             <div className="history">
             <div className="ima">
                   <img src={transfer} alt="allusers"></img>
                 </div> 
             <Link to="/Transaction"><button type="button"  className="btn btn-primary">Transfer</button></Link>
             </div>
             <div className="history">
             <div className="ima">
                   <img src={passbook} alt="allusers"></img>
                 </div> 
             <Link to="/History"><button type="button"  className="btn btn-primary">History</button></Link>
             </div>
             </div>
             </div>
        );
  }
}


export default Home;