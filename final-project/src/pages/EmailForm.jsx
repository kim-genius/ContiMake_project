// import React, { useState } from 'react';
// import axios from 'axios';

// const EmailForm = () => {
//   const [to, setTo] = useState('');
//   const [subject, setSubject] = useState('');
//   const [text, setText] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:3001/sendEmail', { to, subject, text });
//       console.log(res.data);
//     } catch (err) {
//       console.error('Error sending email:', err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         placeholder="To"
//         value={to}
//         onChange={(e) => setTo(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Subject"
//         value={subject}
//         onChange={(e) => setSubject(e.target.value)}
//       />
//       <textarea
//         placeholder="Message"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button type="submit">Send Email</button>
//     </form>
//   );
// };

// export default EmailForm;

