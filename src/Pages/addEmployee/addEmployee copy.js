import React, { Component } from 'react'
import './addEmployee.css'
export default class addEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        // this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        
    }


    render() {
        return (
            <>
            
                <div className="container" id="outer">
                <h1>
                REGISTER EMPLOYEE
            </h1>
        <form name="form1" action="Employee.html" method="get">
          <br />
          <b>Please enter your ID: </b>
          <input type="number" name="EmployeeID" maxLength={15} placeholder="Employee ID" required />
          <br />
          <br />
          <b>Please enter your First Name:</b>
          <input type="text" name="FirstName" maxLength={15} placeholder="First Name" required />
          <br />
          <br />    
          <b>Please enter your Last Name:</b>
          <input type="text" name="LastName" maxLength={15} placeholder="Last Name" required />
          <br />
          <br />
          <b>Enter your phone number:</b>
          <input type="number" name="PhoneNo" maxLength={15} placeholder="Ph no." required />
          <br />
          <br />
          <b>Enter your Date of Birth:</b>
          <input type="date" name="DOB" maxLength={8} required />
          <br />
          <br />
          <b>Enter your Street:</b>
          <input type="text" name="City" maxLength={20} placeholder="Street Name" required />
          <br />
          <br />
          <b>Enter your City:</b>
          <input type="text" name="Street" maxLength={20} placeholder="City Name" required />
          <br />
          <br />
          <b>Enter your Country:</b>
          <input type="text" name="Country" maxLength={20} placeholder="Country Name" required />
          <br />
          <br />
          <div><input type="submit" id="button" defaultValue="Submit" onclick="test.js" /></div>
          <br />
        </form></div>
            </>
        )
    }
}
