import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../Shared/Header'
import Body from './Body'
import Footer from './Footer'
import injectTapEventPlugin from 'react-tap-event-plugin';


const TheContainer = React.createClass({
  render: function () {
    return (
      <div>

      </div>
    )
  }
});

class MainPage extends Component {

    render(){
        return(
          <MuiThemeProvider>
              <div>
                  <Header />
                  <Body className="generic-center borderless"/>
                  <Footer />
              </div>
          </MuiThemeProvider>
        )
    }
}

export default MainPage

