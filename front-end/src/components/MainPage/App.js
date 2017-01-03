import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

class MainPage extends Component {
    render(){
        return(
            <div className="generic-center borderless"> 
                Main App page
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default MainPage

