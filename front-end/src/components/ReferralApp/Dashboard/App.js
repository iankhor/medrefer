import React, { Component } from 'react'
import Header from '../../Shared/Header'
import Body from './Body'
import Footer from '../../Shared/Footer'

class ReferralDashboard extends Component {
    render(){
        return(
            <div className="generic-center borderless"> 
                ReferralDashboard page
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default ReferralDashboard

