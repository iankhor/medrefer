import React, { Component } from 'react'
import Header from '../Shared/Header'
import Body from './Body'
import Footer from './Footer'

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

