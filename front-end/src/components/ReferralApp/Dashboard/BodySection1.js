import React from 'react'
import { Link } from 'react-router'

const BodySection1 = (props) => {
        return (
            <div className="generic-center">
                <h1>This is from BodySection1</h1>
                <Link to="/placeholder">Post a referral</Link>
            </div>
        )
}

export default BodySection1