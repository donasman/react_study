/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useRef, useState } from 'react';
import { storage } from '../../../configs/firebase/firebaseConfig';
import { Line } from 'rc-progress';
import { v4 as uuid } from "uuid"

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
    width: 300px;
    height: 300px;
    overflow: hidden;
    & > img {
        width: 100%;
    }

`
function Image() {
    const [ uploadFiles, setUploadFiles ] = useState([]);
    const [ previews, setPreviews ] = useState([]);
    const [ progressPercent, setProgressPercent] = useState(0);
    const [ urls, setUrls] = useState("");
    const imgFileRef = useRef();

    useEffect(() => {
        setUrls(!localStorage.getItem("urls") ? "" : localStorage.getItem("urls"));
    }, []);


    const handleImageUpload = (e) => {
        const file = previews;
        let promises = [];

        promises.map(file => new Promise((resolve) => {
            const storageRef = ref(storage,`files/test/${uuid()}_${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
        }))

        const storageRef = ref(storage,`files/test/${uuid()}_${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                setProgressPercent(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100))
            },
            (error) => {},
            () => {
                getDownloadURL(storageRef).then(url => {
                    localStorage.setItem("url", url);
                    setUrls(url);
                    setPreviews([]);
                });
            }
        );
    }
    
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files); // files배열을 일반ArrayList배열로 변환

        if(files.length === 0) {
            imgFileRef.current.value = "";
            return;
        }
        setUploadFiles(files);

        let promises = [];

        promises = files.map(file => new Promise((resolve) => { //반복이 돌때마다 Promise 생성
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                resolve(e.target.result);
            };
            fileReader.readAsDataURL(file);
        }))
        //생성된 프로미스들을 정해진 위치에 순서에 맞게 넣기 귀해 Promise.all 사용
        // result에 resolve(e.target.result) 이 값이 들어있음
        Promise.all(promises)
        .then(result => {
            console.log(result);
            setPreviews(result);
        });
    
        // for (let file of e.target.files) { 
        //     promises = [...promises, new Promise((resolve) => {
        //         const fileReader = new FileReader();
    
        //         fileReader.onload = (e) => {
        //             console.log(e.target.result);
        //             resolve(e.target.result);
        //         };
        //         fileReader.readAsDataURL(file);
        //     })];
         
        // }
        

      };

    return (
        <div css={layout}>
            <div css={imageLayout}>
                <img src={urls} alt='' />
            </div>
            {previews.map((preview,index) =>
                <>
                    <div key={index} css={imageLayout}>
                        <img src={preview} alt='' />
                    </div>
                    <Line percent={progressPercent} strokeWidth={4} strokeColor={"#dbdbdb"}/>                
                </>
                )}
            <input style={{display:"none"}} type="file" onChange={handleImageChange} ref={imgFileRef} multiple={true}/>
            <button onClick={() => imgFileRef.current.click()}>이미지 불러오기</button>
            <button onClick={handleImageUpload}>이미지 업로드</button>
        </div>
    );
}

export default Image;