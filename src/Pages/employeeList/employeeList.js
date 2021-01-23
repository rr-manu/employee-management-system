import React, { Component } from 'react'
import './employeeList.css'
import Card from './card';
import {Link} from "react-router-dom"
import avatar from './un.jpeg';
const axios = require('axios');

export default class employeeList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 employees:[]
        }

        // this.handleEvent = this.handleEvent.bind(this)
    }
    componentDidMount() {
      axios.get('https://asdl-miniproject.herokuapp.com/employees')
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
            <>
      <div className="rows">

        {this.state.employees.map((x) => (
        <Link to={{pathname: `/employee/${x._id}`, query: {id:x._id}}} >  
        <Card id={x._id} name={x.name} role={x.role}/>
        </Link>
        )
        
        )
      
      }
      </div>
      </>
        )
    }
}
