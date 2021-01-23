import React, { Component } from 'react'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

const axios = require('axios');

export default class employee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees:"" 
        }

        // this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        var id= this.props.location.query.id;
        axios.get(`https://asdl-miniproject.herokuapp.com/employee/${id}`)
        .then((response)=> {
          // handle success
          this.setState({employees:response.data});
          console.log(this.state.employees);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
    render() {
        return (
            <div className="container mt-5">
            <div className="container-fluid">
                <h2 className="font-weight-bold">Employee Details: </h2>
        
            </div>
            <div className="container d-flex emp-det">
                <div className="user">
                <FontAwesomeIcon style={{fontSize: '18em'}} icon={faUserTie} />
                </div>
                <div className="emp-details">
                    <ul>
                        <li><span className="font-weight-bold">Employee ID:</span> {this.state.employees._id}</li>
                        <li><span className="font-weight-bold">Name:</span> {this.state.employees.name}</li>
                        <li><span className="font-weight-bold">DOB:</span> {this.state.employees.DOB}</li>
                        <li><span className="font-weight-bold">Experience:</span> {this.state.employees.experience}</li>
                        <li><span className="font-weight-bold">Role:</span> {this.state.employees.role}</li>
                        <li><span className="font-weight-bold">Salary:</span> {this.state.employees.salary}</li>
                   
                    </ul>
                </div>
            </div>

               
              
        </div>
        )
    }
}
