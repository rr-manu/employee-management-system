import React, { Component } from 'react'
import './employee.css'
export default class employee extends Component {
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
                <h3>Employee id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: (id)<br /><br />
        Name  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: (Name)<br /><br />
        Phone Number: (Number)<br /><br />
        Date of Birth&nbsp;&nbsp;&nbsp;&nbsp;: (dd/mm/yyyy)<br /><br />
        Street Name  &nbsp;&nbsp;&nbsp;: (Street Name)<br /><br />
        City &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    : (City Name)<br /><br />
        Country  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    : (Country Name) --&gt;
      </h3>
            </>
        )
    }
}
