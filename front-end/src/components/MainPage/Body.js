import React, { Component } from 'react'
import BodySection1 from './BodySection1'
import BodySection2 from './BodySection2'
import BodySection3 from './BodySection3'
import { Link } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';

class Body extends Component {
    render(){
        return(
            <div className="generic-center dummy-height">
                <h1>This is a Body page</h1>
                <BodySection1 />
                <BodySection2 />
                <BodySection3 />
            </div>
        )
    }
}

export default Body

