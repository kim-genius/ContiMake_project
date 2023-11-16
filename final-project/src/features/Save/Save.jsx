import React, { useState } from 'react';
import axios from '../../axios';

const Save = () => {
    const [data, setData] = useState(['John Doe,30', 'Jane Doe,25']);

    const createFile = () => {
        axios.post('/createFile', { data })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const readFile = () => {
        axios.get('/readFile')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <button onClick={createFile}>Create File</button>
            <button onClick={readFile}>Read File</button>
        </div>
    );
};

export default Save;
