import React, { Component } from 'react'
import Header from '../Shared/Header'
import Body from './Body'
import Footer from './Footer'

class ReferralApp extends Component {
    render(){
        return(
            <div className="generic-center borderless"> 
                Referral App page
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default ReferralApp

