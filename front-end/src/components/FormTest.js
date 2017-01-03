import React, { Component } from 'react'
import { NavigationPrompt } from 'react-router'
import { Link } from 'react-router'

//block transitions for a half filled form

class Form extends Component {
    constructor(){
        super()

        //binding functions
        this._handleSubmit = this._handleSubmit.bind(this)
        this._handleInputChange = this._handleInputChange.bind(this)

        this.state = {
            blockTransitions: false,
            inputLength: 0
        }
    }

    _handleSubmit(e) {
        e.preventDefault()
        e.target.reset()
        this.setState({
            blockTransitions: false
        })
        console.log('handling submit')
        console.log('e.target =',e.target)
    }

    _handleInputChange(e) {
        var length = e.target.value.length
        this.setState({
            //if lenght of input is more than 0 then, block transition > 0
            blockTransitions: length > 0,
            inputLength: length
        })

        // console.log('input Length = ', this.state.inputLength)
        // console.log('blockTransition = ', this.state.blockTransitions)
    }


    render(){
        // console.log('blockTransition = ', this.state.blockTransitions)
        return(
            <div>
                <h1> Imaginary Form</h1>
                <Link to="/">Click me to go to Another Page</Link>

                <form onSubmit={(e) => this._handleSubmit(e)} className="">
                    {/*prevent transistion*/}
                    {this.state.blockTransitions && (
                        <NavigationPrompt
                            message={(location) => (
                            `Are you sure you want to go to ${location.pathname}`
                            )}
                        />
                    )}


                    <p>Blocking? {this.state.blockTransitions ? 'Yes' : 'No'}</p>
                    <input onChange={(e) => this._handleInputChange(e)} type="text" className="" placeholder="type here" />
                    <button className="" type="submit">Click on submit</button>
                </form>
            </div>
        )
    }
}

export default Form

