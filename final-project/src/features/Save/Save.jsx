// import React, { useState, useRef } from 'react';
// import axios from '../../axios';

// const Save = () => {
//     const [data, setData] = useState(['John Doe,30', 'Jane Doe,25']);

//     const title = useRef();

//     const createFile = () => {
//         // const fileName = 'yourFileName.corn'; // 원하는 파일명으로 변경
//         axios.post('/upload/createFile', {
//             data,
//             title: title.current.value
//         })
//             .then(response => {
//                 console.log(response.data);
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     };

//     const readFile = () => {
//         axios.get('/upload/readFile')
//             .then(response => {
//                 console.log(response.data);
//                 setData(response.data);
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     };

//     return (
//         <div>
//             <button onClick={createFile}>Create File</button>
//             <input ref={title}></input>
//             <img></img>
//             <button onClick={readFile}>Read File</button>
//             <div>{data}</div>
//         </div>
//     );
// };

// export default Save;



import React, { useState, useRef } from 'react';
import axios from '../../axios';

const Save = () => {
    const [data, setData] = useState(['John Doe,30', 'Jane Doe,25']);

    const title = useRef();

    const createFile = () => {
        // const fileName = 'yourFileName.corn'; // 원하는 파일명으로 변경
        axios.post('/upload/createFile', {
            data,
            title: title.current.value
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const readFile = () => {
        axios.get('/upload/readFile')
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <button onClick={createFile}>Create File</button>
            <input ref={title}></input>
            <img></img>
            <button onClick={readFile}>Read File</button>
            <div>{data}</div>
        </div>
    );
};

export default Save;