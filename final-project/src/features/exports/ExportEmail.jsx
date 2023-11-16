import React, { Component, useState } from 'react'
import styles from './ExportEmail.module.css';
import axios from '../../axios';

export default class ExportEmail extends Component {

    state = {
        // name: '',
        // lastname: '',
        email: '',
        message: '',
        sent: false
    }

    // handle inputs
    // handleName = (e) => {
    //     this.setState({
    //         name: e.target.value
    //     })
    // }
    // handleLastName = (e) => {
    //     this.setState({
    //         lastname: e.target.value
    //     })
    // }
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
            // name: this.state.name,
            // lastname: this.state.lastname,
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
            // name: '',
            // lastname: '',
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
                    <div className={styles.form}>
                        <p>ContiStoryPrompt에서 보내기</p>
                        {/* 
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
                        </div> */}
                        <div className={styles.singleItem}>
                            <label htmlFor="email" className="">받는사람</label>
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
                            <textarea
                                name="message"
                                id=""
                                cols="30"
                                rows="5"
                                placeholder="your message..."
                                value={this.state.message}
                                onChange={this.handleMessage}>

                            </textarea>
                        </div>
                        <div className={this.state.sent ? 'msg msgAppear' : 'msg'}>Message has been sent</div>
                        <button className={styles.btn} type="submit">Submit</button>
                    </div>
                </form >
            </div >
        )
    }
}




// import React, { useState } from 'react';
// import styles from './ExportEmail.module.css';
// import axios from 'axios';

// const ExportEmail = () => {
//     const [name, setName] = useState('');
//     const [lastname, setLastname] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [sent, setSent] = useState(false);

//     const handleName = (e) => {
//         setName(e.target.value);
//     };
//     const handleLastName = (e) => {
//         setLastname(e.target.value);
//     };
//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//     };
//     const handleMessage = (e) => {
//         setMessage(e.target.value);
//     };

//     const formSubmit = (e) => {
//         e.preventDefault();

//         const data = {
//             name: name,
//             lastname: lastname,
//             email: email,
//             message: message,
//         };

//         axios.post('/exports/api/forma', data)
//             .then((res) => {
//                 setSent(true);
//                 resetForm();
//             })
//             .catch((error) => {
//                 console.error('Error sending message:', error);
//             });
//     };

//     const resetForm = () => {
//         setName('');
//         setLastname('');
//         setEmail('');
//         setMessage('');

//         setTimeout(() => {
//             setSent(false);
//         }, 3000);
//     };

//     return (
//         <div className={styles.container}>
//             <div>안</div>
//             <div>안</div>
//             <div>안</div>
//             <div>안</div>
//             <div>안</div>
//             <div>안</div>
//             <div>안</div>
//             <form onSubmit={formSubmit}>
//                 <div className={styles.singleItem}>
//                     <label htmlFor="name">Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         className={styles.name}
//                         placeholder="Your name..."
//                         value={name}
//                         onChange={handleName}
//                     />
//                 </div>
//                 <div className={styles.singleItem}>
//                     <label htmlFor="lastname">Lastname</label>
//                     <input
//                         type="text"
//                         name="lastname"
//                         className={styles.lastname}
//                         placeholder="Your lastname..."
//                         value={lastname}
//                         onChange={handleLastName}
//                     />
//                 </div>
//                 <div className={styles.singleItem}>
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="text"
//                         name="email"
//                         className={styles.email}
//                         placeholder="Your email..."
//                         value={email}
//                         onChange={handleEmail}
//                         required
//                     />
//                 </div>
//                 <div className={styles.textArea}>
//                     <label htmlFor="message">Message</label>
//                     <textarea
//                         name="message"
//                         id="message"
//                         cols="30"
//                         rows="5"
//                         placeholder="Your message..."
//                         value={message}
//                         onChange={handleMessage}
//                     />
//                 </div>
//                 <div className={sent ? `${styles.msg} ${styles.msgAppear}` : styles.msg}>
//                     Message has been sent
//                 </div>
//                 <div className={styles.btn}>
//                     <button type="submit">Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default ExportEmail;