import React, { Component } from 'react'
import styles from './Form.module.css';
import axios from '../../axios';

export default class Form extends Component {

    state = {
        name: '',
        lastname: '',
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
    handleLastName = (e) => {
        this.setState({
            lastname: e.target.value
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

    // end of handle inputs

    formSubmit = (e) => {
        e.preventDefault();

        let data = {
            name: this.state.name,
            lastname: this.state.lastname,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('/exports/api/forma', data)
            .then(res => {
                this.setState({
                    sent: true,
                }.this.resetForm())
            }).catch(() => {
                console.log('message not sent');
            })
    }

    // for reseting initial data
    resetForm = () => {
        this.setState({
            name: '',
            lastname: '',
            email: '',
            message: ''
        })

        setTimeout(() => {
            this.setState({
                sent: false
            })
        }, 3000)
    }



    render() {
        return (
            <div className={styles.container} >
                <form onSubmit={this.formSubmit}>
                    <div className={styles.singleItem}>
                        <label htmlFor="name" className="">name</label>
                        <input type="text"
                            name="name"
                            className={styles.name}
                            placeholder='your name...'
                            value={this.state.name}
                            onChange={this.handleName} />
                    </div>
                    <div className={styles.singleItem}>
                        <label htmlFor="lastname" className="">Lastname</label>
                        <input type="text"
                            name="lastname"
                            className={styles.lastname}
                            placeholder='your lastname...'
                            value={this.state.lastname}
                            onChange={this.handleLastName} />
                    </div>
                    <div className={styles.singleItem}>
                        <label htmlFor="email" className="">email</label>
                        <input type="text"
                            name="email"
                            className={styles.email}
                            placeholder='your email...'
                            value={this.state.email}
                            onChange={this.handleEmail}
                            required />
                    </div>
                    <div className={styles.textArea} singleItem>
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
                    <div className={this.state.sent ? 'msg msgAppear' : 'msg'}>Message has been sent</div>
                    <div className={styles.btn}>
                        <button type="submit">Submit</button>
                    </div>
                </form >
            </div >
        )
    }
}