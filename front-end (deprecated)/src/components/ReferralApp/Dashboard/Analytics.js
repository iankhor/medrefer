import React, { Component } from 'react'
import { Paper } from 'material-ui'

//to be updated
const style = {
  height: 200,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


class Analytics extends Component {
    render(){
        return(
            <div className="flex-center">
                <div>
                    <Paper style={style} zDepth={5} circle={true} />
                    <h3>Pending Referrals</h3>
                </div>
                   <div>
                    <Paper style={style} zDepth={5} circle={true} />
                    <h3>Assigned Referrals</h3>
                </div>
            </div>
        )
    }
}


export default Analytics

