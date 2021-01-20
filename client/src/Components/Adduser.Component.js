import React , { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
class Adduser extends Component
{
   constructor(props){
    super(props);
    this.onchangename=this.onchangename.bind(this);
    this.onchangeemail=this.onchangeemail.bind(this);
    this.onchangephone=this.onchangephone.bind(this);
    this.onchangecurrent_balance=this.onchangecurrent_balance.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
        name:'',
        email:'',
        phone:'',
        current_balance:0,
        users:[]
         }
    }
onchangename(e)
{
this.setState({
   name:e.target.value
});
}
onchangeemail(e)
{
this.setState({
   email:e.target.value
});
}
onchangephone(e)
{
this.setState({
   phone:e.target.value
});
}
onchangecurrent_balance(e)
{
this.setState({
    current_balance:e.target.value
});
}
onSubmit(e){
    e.preventDefault();
    const users={
        name:this.state.name,
        email:this.state.email,
        phone:this.state.phone,
        current_balance:this.state.current_balance
    }
    // console.log(users);
    axios.post('/users/',users)
    .then(res=>console.log(res.data));
    Swal.fire({
      position: 'center',
      icon: 'success',
      text:'Account open successfully',
      title: 'Welcome to Spark Bank',
      showConfirmButton: false,
      timer: 3000
    })
    }

    render()
    { 
        return(
        <div>
            <div className="container">
              <h3>Open Account</h3>
              <form  className="formclass" onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Name:</label>
                    <input type="text" required="true" className="form-control" id="name" placeholder="Enter Name" 
                    value={this.state.name}
                    onChange={this.onchangename}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input type="email" required="true" className="form-control" id="email" placeholder="Enter email"  value={this.state.email}
                    onChange={this.onchangeemail}></input>
                  </div>
                  <div className="form-group">
                    <label>Phone:</label>
                    <input type="text" required="true" className="form-control" id="phone" placeholder="Enter phone"  value={this.state.phone}
                    onChange={this.onchangephone}></input>
                  </div>
                  <div className="form-group">
                    <label>Balance:</label>
                    <input type="number" required="true" className="form-control" id="email" placeholder="Opening amount"  value={this.state.current_balance}
                    onChange={this.onchangecurrent_balance}></input>
                  </div>
                  <button type="submit" className="btn btn-default">Add User</button>
              </form>
            </div>
        </div>
        );
    }
}
export default Adduser;