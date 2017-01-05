import React, { Component } from 'react'
import LoginButton from './LoginButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


class Login extends Component {
    render(){
        return(
            <MuiThemeProvider>
                <div className="generic-center borderless"> 
                    Login page
                    <LoginButton />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Login

