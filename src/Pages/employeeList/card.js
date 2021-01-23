import React, { Component } from 'react'
import './employeeList.css'
import avatar from './un.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
const axios = require('axios');
export default class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 employees:""
        }

        // this.handleEvent = this.handleEvent.bind(this)
    }

    

    
    render() {
        return (
            <>



        <div className="columns">
          <div className="cardStyle">
            <div id="logo"> 
              {/* <img src={avatar} width={100} />  */}
              <FontAwesomeIcon style={{fontSize: '18em',width:"100px",height:"100px",backgroundColor:"#fff"}} icon={faUserTie} />
            </div>
            
            <p className="name">{this.props.name}</p>
           
            <h2 className="text">{this.props.role}</h2>
            <h6 className="">Id:{this.props.id}</h6>
          </div>
        </div>

            </>
        )
    }
}
