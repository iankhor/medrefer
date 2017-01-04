import React, { Component } from 'react'
import Header from '../Shared/Header'
import Body from './Body'
import Footer from './Footer'
import injectTapEventPlugin from 'react-tap-event-plugin';

class MainPage extends Component {
    render(){
        return(
            <div>
                <Header />
                <Body className="generic-center borderless"/>
                <Footer />
            </div>
        )
    }
}

export default MainPage

