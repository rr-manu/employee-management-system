import React, { Component } from 'react'
import './addEmployee.css';

const axios = require('axios');
export default class addEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 name:"",
                 email:"",
                 experience:"",
                 role:"",
                 dob:"",
                 salary:"",
                 phoneNumber:""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeValue=this.onChangeValue.bind(this);
    }

    componentDidMount() {
        
    }

    onChangeValue(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit(){
        axios.post(`https://asdl-miniproject.herokuapp.com/addemployee`,{
            name:this.state.name,
            email:this.state.email,
            experience:this.state.experience,
            role:this.state.role,
            DOB:this.state.dob,
            salary:this.state.salary,
            phoneNumber:this.state.phoneNumber
        })
        .then((response)=> {
          // handle success
        
          console.log("succuse");
          window.location.href = "/";
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
    render() {
        return (
           <div className="container">
               <h3>Add employee</h3>
    <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" 
    name="name"
    value={this.state.name} onChange={this.onChangeValue}
    />

    </div>
            <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
    name="email"
    value={this.state.email} onChange={this.onChangeValue}
    />
 
     </div>


     <div className="form-group">
    <label for="exampleInputEmail1">Phone  number</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone number" 
    name="phoneNumber"
    value={this.state.phoneNumber} onChange={this.onChangeValue}
    />
 
     </div>
        <div className="form-group">
    <label for="exampleInputEmail1">DOB</label>
    <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter DOB" 
     name="dob"
     value={this.state.dob} onChange={this.onChangeValue}
    />

    </div>
    <div className="form-group">
    <label for="exampleInputEmail1">Experience</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter experience"  name="experience"
    value={this.state.experience} onChange={this.onChangeValue}
    />

    </div>
    <div className="form-group">
    <label for="exampleInputEmail1">Salary</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Salary" name="salary"
    value={this.state.salary} onChange={this.onChangeValue}
    />

    </div>

    <div className="form-group">
    <label for="exampleInputEmail1">Role</label>
    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Role" name="role"
    
    value={this.state.role} onChange={this.onChangeValue}/>

    </div>

    <button type="submit" class="btn btn-primary"
    onClick={this.handleSubmit}
    >Submit</button>

           </div>
            
              
        )
    }
}
