import React  from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Usertable.css"
 function  History()
  {

   const [setid,setids]=useState([]);
   useEffect(()=>{
     async function  getid() {
       await axios.get(`/History/`)
       .then(res=>{
           
            setids(res.data.History);
            console.log(res);
       });
     }
     getid();
   },[]);
     return(
      <div className="containeruser">
      <table>
         <thead>
            <tr>
               <th>Sender</th>
               <th>Reciver</th>
               <th>Transfer amount</th>
            </tr>
         </thead>
         
         <tbody>
         {
        setid.map(post => {
          return(
            <tr key={post._id} value={post._id}>
               <td>{post.sender}</td>
               <td>{post.reciver}</td>
               <td>$ {post.Transfer_amount}</td>
              </tr>
          );
        })
      }
         </tbody>
      </table>
      </div>

     );
     }
 export default History;