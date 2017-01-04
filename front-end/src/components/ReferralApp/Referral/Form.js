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
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import KickAssDebugger from '../../KickAssDebugger'

const styles =  {
  whiteBackgroundForm: {
    backgroundColor: 'rgb(255,255,255)'
  }

}

class Form extends Component {

    constructor(props) {
        super(props)

        this._handleChange = this._handleChange.bind(this)

        this.state = {
            value: 3,
        }

        this.state = {
          patientData : {
                          surname :   null,
                          givenName:  null,
                          address:    null,
                          postcode:   null,
                          dateOfBirth:  null,
                          medicareNumber:   null,
                          contactNumber:  null
                        }
        }
    }

    _handleChange(e) {
      // const a = { name: e.target.name , value: e.target.value}
      // console.log(a)
      const patientData = {
              ...this.state.patientData, 
              [e.target.name] : e.target.value}

      this.setState( {patientData})
      
      console.log(patientData)
    }

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
        <div className="patient-data border">
            <TextField
              hintText="Surname"
              floatingLabelText="Surname"
              floatingLabelFixed={true}
              name="surname"
              onChange={(e) => this._handleChange(e)}
            /> 
            <TextField
              hintText="Given name"
              floatingLabelText="Given name"
              floatingLabelFixed={true}
              name="givenName"
              onChange={(e) => this._handleChange(e)}
            /> 
            <TextField
              hintText="Address"
              floatingLabelText="Address"
              floatingLabelFixed={true}
              fullWidth={true}
              name="address"
              onChange={(e) => this._handleChange(e)}
            />
            <TextField
              hintText="Post code"
              floatingLabelText="Post code"
              floatingLabelFixed={true}
              name="postcode"
              onChange={(e) => this._handleChange(e)}
            />
            <br/>
            <DatePicker 
              hintText="Date of birth" 
              floatingLabelText="Date of birth"
              mode="landscape"
              autoOK={true} 
              name="dateOfBirth"
              onChange={(e) => this._handleChange(e)}
            />
            <TextField
              hintText="Medicare number"
              floatingLabelText="Medicare number"
              floatingLabelFixed={true}
              name="medicareNumber"
              onChange={(e) => this._handleChange(e)}
            />
            <TextField
              hintText="Contact number"
              floatingLabelText="Contact number"
              floatingLabelFixed={true}
              name="contactNumber"
              onChange={(e) => this._handleChange(e)}
            />
        </div>

        <KickAssDebugger data={this.state.patientData}/>

      </div>
    );
  }
}

export default Form