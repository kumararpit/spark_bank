import React  from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Usertable.css"
 function  Allusers()
  {

   const [setid,setids]=useState([]);
   useEffect(()=>{
     async function  getid() {
       await axios.get(`/users/`)
       .then(res=>{
           
            setids(res.data);
       });
     }
     getid();
   });
     return(
      <div className="containeruser">
      <table>
         <thead>
            <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Phone</th>
               <th>Balance</th>
            </tr>
         </thead>
         
         <tbody>
         {
        setid.map(post => {
          return(
            <tr key={post._id} value={post._id}>
               <td>{post.name}</td>
               <td>{post.email}</td>
               <td>{post.phone}</td>
               <td>$ {post.current_balance}</td>
              </tr>
          );
        })
      }
         </tbody>
      </table>
      </div>

     );
     }
 export default Allusers;