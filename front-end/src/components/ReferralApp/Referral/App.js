import React, { Component } from 'react'
import Header from '../../Shared/Header'
import Form from './Form'
import Footer from '../../Shared/Footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Referral extends Component {
    render(){
        return(
        <MuiThemeProvider>
            <div className=""> 
                Referral of Mr.[Insert a name] page
                {/*<Header />*/}
                <Form />
                {/*<Footer />*/}
            </div>
        </MuiThemeProvider>
        )
    }
}

export default Referral

