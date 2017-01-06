import React , { Component } from 'react';
import 'whatwg-fetch'; // Polyfills window.fetch
import fetchAPI from '../../api/fetchAPI'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { signIn } from '../../api/auth'

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class LoginButton extends Component {
  constructor() {
    super()

    this._handleChange = this._handleChange.bind(this)
  }

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  _handleChange(e) {
    console.log(e.target.value)
  }

  render() {
    const actions = [
      <FlatButton
        label="Login"
        primary={true}
        disabled={false}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Sign Up"
        primary={true}
        disabled={false}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        disabled={false}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Login here" onTouchTap={this.handleOpen} />
          <Dialog
            title="Welcome to MedRefer"
            actions={actions}
            modal={true}
            open={this.state.open}
          >
          <TextField
            defaultValue=""
            floatingLabelText="Enter Email"
            name="email"
            onChange={(e) => this._handleChange(e)}
          />
          <TextField
            defaultValue=""
            floatingLabelText="Enter password"
            name="password"
            type="password"
            onChange={(e) => this._handleChange(e)}
          />
          </Dialog>
      </div>
    );
  }
}