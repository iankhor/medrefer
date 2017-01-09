import React, { Component } from 'react'
import BodySection1 from './BodySection1'

class Body extends Component {
    render(){
        return(
            <div className="generic-center dummy-height"> 
                <h1>This is a Body page</h1>
                <BodySection1 />
            </div>
        )
    }
}

export default Body

