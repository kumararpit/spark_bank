import axios from 'axios';
import "./Transction.css";
import Swal from 'sweetalert2'
import React , { useEffect, useState } from 'react';
const Transaction=()=>{
  const[id1,setid1]=useState('');
  const[id2,setid2]=useState('');
  const [ids,setid] = useState([]);
  const [ transfer_amount ,setbalance] = useState();
  useEffect(()=>{
    async function  getid() {
      await axios.get(`/users/`)
      .then(res=>{
           setid(res.data);
      })
    }
    getid();
  },[]);
  const  handlesubmit =(e)=>
  {
    e.preventDefault();
    
    axios.put(`/History/${id1}/sendto/${id2}`,{transfer_amount})
    .then((res)=>{
      if(res.data===true){
        Swal.fire({
          icon: 'success',
          title: 'Payment',
          text: 'Payment Successful'
        })
        axios.post(`/History/${id1}/${id2}`,{transfer_amount})
        .then((res)=>{
          console.log(res.data);
        });
      }
      if(res.data===null){
        Swal.fire({
          icon: 'error',
          title: 'your current balance is Nill',
          text: 'Please add balance then try again'
        })
      }
      if(res.data===12){
        Swal.fire({
          icon: 'error',
          title: 'Unsufficent balance',
          text: ' Please try again'
        })
      }

    }) 
    .catch((err)=>{
      Swal.fire({
        icon: 'error',
        title: 'opps',
        text:'something wrong!'
      })
    })
    
  }
  return(
    <div className="container">
    <h3> Transfer Money</h3>
      <div className="transction">
    <form onSubmit={(e)=>{handlesubmit(e)}} >
    <label>Select Sender</label>
    <select value={id1} onChange={(event)=>{setid1(event.target.value);}}>
      {
        ids.map(post => {
          return(
            <option key={post._id} value={post._id}>{post.name}</option>
          );
        })
      }
    </select>
      
    <label>Select Reciver</label>
    <select value={id2} onChange={(event)=>{setid2(event.target.value); }}>
    {  
        ids.map(post => {
          return(
            <option key={post._id} value={post._id}>{post.name}</option>
          );
        })
      }
    </select>

    <label>Amount</label>
    <input type="number"  className="form-control" onChange={(event)=>{setbalance(event.target.value);}}/>
  <button type="submit" className="btn btn-default" >Transfer</button>
    </form>
    </div>
    </div>
  );
}
export default Transaction;