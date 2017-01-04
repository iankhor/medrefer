import React , { Component } from 'react'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton'

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 3,
        }
    }


  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        {/* Patient data header title bar*/}
        <Toolbar>
        <ToolbarTitle text="Patient Data" />
          <ToolbarGroup firstChild={true}>
          </ToolbarGroup>

          <ToolbarGroup lastChild={true}>
            <FlatButton label="Click Me" />
          </ToolbarGroup>
        </Toolbar>
        {/* Patient data*/}
        <Toolbar>
          patient data placeholder bla bla bla
        </Toolbar>

        {/* Referring doctor title bar*/}
        <Toolbar>
        <ToolbarTitle text="Referring Doctor" />
          <ToolbarGroup firstChild={true}>
          </ToolbarGroup>

          <ToolbarGroup lastChild={true}>
            <FlatButton label="Click Me" />
          </ToolbarGroup>
        </Toolbar>
        {/* Patient data*/}
        <Toolbar>
          DOctor data bla bla bla
        </Toolbar>

        {/* Triage use */}
        <Toolbar>
        <ToolbarTitle text="Triage" />
          <ToolbarGroup firstChild={true}>
          </ToolbarGroup>

          <ToolbarGroup lastChild={true}>
            <FlatButton label="Click Me" />
          </ToolbarGroup>
        </Toolbar>
        {/* Patient data*/}
        <Toolbar>
          Triage placeholder
        </Toolbar>


      </div>
    );
  }
}

export default Form