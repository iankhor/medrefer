import React, { Component } from 'react'
// import Header from '../../Shared/Header'
import Body from './Body'
import Footer from '../../Shared/Footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ReferralDashboard extends Component {
    render(){
        return(
            <MuiThemeProvider>
                <div className="generic-center borderless"> 
                    ReferralDashboard page
                    {/*<Header />*/}
                    <Body />
                    <Footer />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default ReferralDashboard

