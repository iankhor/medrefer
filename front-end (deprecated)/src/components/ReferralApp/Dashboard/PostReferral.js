import React, { Component } from 'react'
import { RaisedButton } from 'material-ui'

class PostReferral extends Component {
    render(){
        return(
            <div className="generic-center">
                 <RaisedButton label="Post a referral" primary={true} />
            </div>
        )
    }
}


export default PostReferral

