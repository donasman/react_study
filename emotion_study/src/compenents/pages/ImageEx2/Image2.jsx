/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { storage } from '../../../configs/firebase/firebaseConfig';
import { Line } from "rc-progress";
import { v4 as uuid } from "uuid"

const layout2 = css`
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
`;

function Image2() {
    const uploadFilesId = useRef(0);
    const [ oldFiles, setOldFiles ] = useState([]);
    const [ newFiles, setNewFiles ] = useState([]);
    const imgFileRef = useRef();
    //old파일이 없으면 빈 배열을 가지고, 있으면 json형태로 변환된 이미지 파일을 받는다
    useEffect(() => {
        setOldFiles(!localStorage.getItem("oldFiles") ? [] : JSON.parse(localStorage.getItem("oldFiles")));
    }, []);

    const handleFileChange = (e) => {
        const loadFiles = Array.from(e.target.files);
        // 선택된 파일이 없으면 함수 종료
        if(loadFiles.length === 0) {
            imgFileRef.current.value = "";
            return;
        }
        // 선택된 파일에 id을 순차적으로 지정하고 필요한 요소들을 객체로 만든다.
        const uploadFiles = loadFiles.map(file => {
            return {
                id: uploadFilesId.current += 1,
                percent: 0,
                originFile: file,
                url: ""                                                                                                                                                                                                                                                                                                                                                              
            };
        });
        // id 초기값 0으로 설정
        uploadFilesId.current = 0;

        let promises = [];
        //읽어온 파일을 비동기에서 순차적으로 진행시키기 위해 promise사용
        promises = uploadFiles.map(file => new Promise((resolve) => {
            const fileReader = new FileReader();
            //파일리더가 온로드 될때 이미지파일 주소를 읽어서 resovle에 넣는다.
            fileReader.onload = (e) => {
                resolve(e.target.result);
            }
            // 파일리더에 업로드된 URL을 읽는다
            fileReader.readAsDataURL(file.originFile);
        }));
        // promiseAll을 사용해 생선된 모든 promise에 map 반복을 실행시켜 resolve로 받아온 값을 동기적 실행해 배열에 넣어준다.
        Promise.all(promises)
        .then(result => {
            setNewFiles(result.map((dataUrl, index) => {
                return {
                    ...uploadFiles[index],
                    preview: dataUrl
                };
            }));
        });        
    }

    const handleImageUpload = () => {
        // 다중파일 업로드 할 수 있게 map반복 실행
        const promises = newFiles.map(file => new Promise(resolve => {
            // 파일에 uuid를 사용해 고유한 파일명을 지어준다.
            const storageRef = ref(storage, `files/test/${uuid()}_${file.originFile.name}`);
            // 고유한 파일명과 파일을 업로드 시키는 함수를 uploadTask 변수에 넣는다.
            const uploadTask = uploadBytesResumable(storageRef, file.originFile);

            // 퍼센트를 보여주는 방법
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    setNewFiles(newFiles.map(sFile => {
                        return sFile.id !== file.id ? sFile : {
                            ...sFile, 
                            percent: Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                        }
                    }));
                },
                (error) => {},
                () => { //
                    getDownloadURL(storageRef).then(url => {
                        const newFile = {
                            ...file,
                            ["url"]: url //배열안에 있는 "url"키에 바로 url대입
                        }
                        resolve(newFile);
                    })
                }
            );
        }));

        Promise.all(promises)
        .then((newFile) => {
            setOldFiles(newFile);
            localStorage.setItem("oldFiles", JSON.stringify(newFile));
        }).then(() => {
            setNewFiles([]);
        });
    }

    return (
        <div css={layout2}>
            {oldFiles?.map(file => 
                <div key={file.id} css={imageLayout}>
                    <img src={file.url} alt="" />
                </div>
            )}
            {newFiles?.map(file => 
                <>
                    <div key={file.id} css={imageLayout}>
                        <img src={file.preview} alt="" />
                    </div>
                    <Line percent={file.percent} strokeWidth={4} strokeColor={"#dbdbdb"}/>
                </>
            )}
            
            <input style={{display: "none"}} type="file" multiple={true} ref={imgFileRef} onChange={handleFileChange}/>
            <button onClick={() => imgFileRef.current.click()}>이미지 불러오기</button>
            <button onClick={handleImageUpload}>이미지 업로드</button>
        </div>
    );
}

export default Image2;