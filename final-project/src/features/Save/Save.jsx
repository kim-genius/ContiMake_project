import React, { useState } from 'react';
import axios from '../../axios';

const Save = () => {
    const [data, setData] = useState(['John Doe,30', 'Jane Doe,25']);
    // const [data, setData] = useState(['']);

    // const createFile = () => {
    //     axios.post('/createFile', { data })
    //         .then(response => {
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // };

    const createFile = () => {
        // const fileName = 'yourFileName.corn'; // 원하는 파일명으로 변경
        const fileName = '파일'; // 원하는 파일명으로 변경
        axios.post('/save/createFile', { data, fileName })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error); 
          });
      };

    const readFile = () => {
        axios.get('/save/readFile')
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
            <button onClick={readFile}>Read File</button>
            <div>{data}</div>
        </div>
    );
};

export default Save;