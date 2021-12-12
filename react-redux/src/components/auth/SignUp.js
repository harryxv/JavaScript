import React, { Component } from 'react'

export class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }
    onChange = (event) => {
        this.setState(
            { [event.target.id]: event.target.value }
        )
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email" >Email</label>
                        <input type="email" id="email" onchange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password" >Password</label>
                        <input type="password" id="password" onchange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName" >First Name</label>
                        <input type="text" id="firstName"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName" >Last Name</label>
                        <input type="text" id="lastName"/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
