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
    const [image, setImage] = useState(null);

    const title = useRef();
    const imageInput = useRef();

    const createFile = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', imageInput.current.files[0]);
        formData.append('data', JSON.stringify(data));
        formData.append('title', title.current.value);
        console.log(formData)

        try {
            await axios.post(
                "/upload/submit",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            ).then((res) => {
                console.log(res);
            }
            );
        }
        catch (err) {
            console.error("Error during request:", err);
        }
    };

    const readFile = () => {
        axios.get('/upload/readFile')
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.err(err);
            });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div>
            <button onClick={createFile}>Create File</button>
            <input type="text" ref={title} placeholder="Enter title" />
            <input type="file" ref={imageInput} onChange={handleImageChange} />
            <button onClick={readFile}>Read File</button>
            <div>{data}</div>
        </div>
    );
};

export default Save;
