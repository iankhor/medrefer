import React, { Component } from 'react'
import Analytics from './Analytics'
import PostReferral from './PostReferral'
import ReferralsList from './ReferralsList'

class Body extends Component {
    render(){
        return(
            <div className="generic-center"> 
                <PostReferral />
                <Analytics />
                <ReferralsList />
            </div>
        )
    }
}

export default Body

