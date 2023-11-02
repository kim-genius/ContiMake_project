import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        sent: false
    }

    // handle inputs
    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    render() {
        return (
            <div className='container' >
                <form>
                    <div className="singleItem">
                        <label htmlFor="name" className="">name</label>
                        <input type="text"
                            name="name"
                            className="name"
                            placeholder='your name...'
                            value={this.state.name}
                            onChange={this.handleName} />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="lastname" className="">Lastname</label>
                        <input type="text"
                            name="lastname"
                            className="lastname"
                            placeholder='your lastname...'
                            value={this.state.lastname}
                            onChange={this.handleName} />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="email" className="">email</label>
                        <input type="text" className="email"
                            name="email"
                            placeholder='your email...'
                            value={this.state.email}
                            onChange={this.handleEmail} />
                    </div>
                    <div className="textArea singleItem">
                        <label htmlFor="message" className="">Message</label>
                        <textarea name="message"
                            id=""
                            cols="30"
                            rows="5"
                            placeholder="your message..."
                            value={this.state.message}
                            onChange={this.handleMessage}>
                        </textarea>
                    </div>
                    <div className="msg">Message has been sent</div>
                    <div className="btn">
                        <button type="submit">Submit</button>
                    </div>
                </form >
            </div >
        )
    }
}