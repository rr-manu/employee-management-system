import React, { Component } from 'react'
import './employeeList.css'
import avatar from './un.jpeg';
export default class employeeList extends Component {
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
               <div className="row">
        <div className="column">
          <div className="card">
            <div id="logo"> 
              <img src={avatar} width={100} /> 
            </div>
            <h3>ID</h3>
            <p>JITHIN</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div id="logo"> 
              <img src={avatar} width={100} /> 
            </div>
            <h3>ID</h3>
            <p>RAJATH</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div id="logo"> 
              <img src={avatar} width={100} /> 
            </div>
            <h3>ID</h3>
            <p>TARUN</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div id="logo"> 
              <img src={avatar} width={100} /> 
            </div>
            <h3>ID</h3>
            <p>RINDISH</p>
          </div>
          <div className="card">
            <div id="logo"> 
              <img src={avatar} width={100} /> 
            </div>
            <h3>ID</h3>
            <p>EMMANUEL</p>
          </div>
        </div>
      </div>
            </>
        )
    }
}
