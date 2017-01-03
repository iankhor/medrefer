import React, { Component } from 'react'
import Header from '../../Shared/Header'
import Body from './Body'
import Footer from '../../Shared/Footer'

class Referral extends Component {
    render(){
        return(
            <div className="generic-center borderless"> 
                Referral of Mr.[Insert a name] page
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default Referral

