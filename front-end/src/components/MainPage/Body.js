import React, { Component } from 'react'
import BodySection1 from './BodySection1'
import BodySection2 from './BodySection2'
import BodySection3 from './BodySection3'
import { Link } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Parallax } from 'react-parallax';


class Body extends Component {
    render(){
        return(
          <Parallax bgImage="assets/1.jpg" width = {100} strength={400}>
            <div className="generic-center dummy-height">
                <BodySection1 />
                <p></p>
                <BodySection2 />
                <p></p>
                <BodySection3 />
            </div>
          </Parallax>
        )
    }
}

export default Body

