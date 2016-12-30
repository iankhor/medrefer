import React, {Component} from 'react';
import { Button } from 'react-bootstrap'
import {connectProfile} from '../auth';
import './Referral.css';

class Referral extends Component {
  static propTypes = {
    ...connectProfile.PropTypes
  };

  state = {
    error: null,
    saved: false,
    saving: false
  }

  render() {
    const {profile} = this.props;
    const {saving, saved} = this.state;
    const user_metadata = profile.user_metadata || {};

    return (
      <div className="Referral">
        Referral test page
      </div>
    );
  }

//   onSubmit = (event) => {
//     event.preventDefault();

//     this.setState({saving: true}, async () => {
//       const error = await this.props.onUpdateProfile({
//         user_metadata: {
//           location: this.locationInput.value
//         }
//       });

//       this.setState({error, saved: !error, saving: false});
//     });
//   }

//   onClearSaved = (event) => {
//     this.setState({saved: false});
//   }
}

export default connectProfile(Referral);
