import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends Component {
    render(){
        return(
            <MuiThemeProvider>
                <div className="generic-center borderless"> 
                    App page
                    <Header />
                    <Body />
                    <Footer />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App

