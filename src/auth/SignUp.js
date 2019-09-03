import React, { Component } from 'react'
import {Button, Form } from 'react-bootstrap'


class SignUp extends Component {
    state = {
        email:"",
        password:"",
        firstName:"",
        lastName:""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <Form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign in</h5>
                    <div className="input-filed">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-filed">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-filed">
                        <label htmlFor="firstName">Etunimi</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-filed">
                        <label htmlFor="lastName">Sukunimi</label>
                        <input type="lastName" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-filed">
                        <Button className="btn punk lighten-1 z-depth-0">Kirjaudu</Button>
                    </div>
                </Form>
            </div>
        )
    }
}
export default SignUp