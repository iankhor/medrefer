import React, { Component } from 'react'
import Analytics from './Analytics'
import PostReferral from './PostReferral'
import ReferralsList from './ReferralsList'

class Body extends Component {
    render(){
        return(
            <div className="generic-center dummy-height"> 
                <h1>[This is a Body Wrapper]</h1>
                <PostReferral />
                <Analytics />
                <ReferralsList />
            </div>
        )
    }
}

export default Body

