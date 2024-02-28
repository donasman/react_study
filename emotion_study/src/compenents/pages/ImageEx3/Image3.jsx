/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';


const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

const imageLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
`;

function Image3(props) {
    const imgFileRef = useRef();
    const [files, setFiles] = useState([]);


    const handleFileChange = (e) => {
        const loadFiles = Array.from(e.target.files);

        if(loadFiles === 0) {
            return;
        }

        let promises = [];
        promises = loadFiles.map(file => new Promise((resolve) => {

            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                resolve(e.target.result);
            }
            fileReader.readAsDataURL(file);

        }));
        Promise.all(promises)
        .then(result => {
            setFiles(result);
        });
    }

    return (
        <div css={layout}>
            {files?.map((file, index) => 
            <>
                <div key={index} css={imageLayout}>
                    <img src={file} alt="" />
                </div>
            </>)}
            <input type="file" style={{display:"none"}} multiple={true} ref={imgFileRef} onChange={handleFileChange}/>
            <button onClick={()=>{imgFileRef.current.click()}}>불러오기</button>
        </div>
    );
}

export default Image3;